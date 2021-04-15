import * as Element from './element.js'
import * as Util from './util.js'
import * as FirebaseController from '../controller/firebase_controller.js'
import * as Routes from '../controller/routes.js'
import * as ViewPage from './view_page.js'

export function addEventListeners() {
    Element.formSearch.addEventListener('submit', async e => {
        e.preventDefault()

        const keywords = e.target.searchKeywords.value.trim()
        if (keywords.length == 0) {
            return
        }
        else {
            const label = Util.disableButton(Element.searchButton)
            const keywordsArray = keywords.toLowerCase().match(/\S+/g)
            const joinedSearchKeys = keywordsArray.join('+')
            history.pushState(null, null, Routes.routePathname.SEARCH + '#' + joinedSearchKeys)
            search_page(keywordsArray)
            Util.enableButton(Element.searchButton, label)
        }
    })
}

export async function search_page(keywordsArray) {
    let html = `<h1>Viewing Search Results</h2>
    <table class="table table-striped">
    <thead>
        <tr>
        <th scope="col">Urls</th>
        <th scope="col">Descriptor</th>
        </tr>
        </thead>
        <tbody>
    `
    let checker = (arr, target) => target.every(v => arr.includes(v));
    try {
        let entryList = await FirebaseController.searchEntries(keywordsArray)

        entryList.forEach(entryList => {
            if (checker(entryList.descriptor, keywordsArray) != false) {

                html += ViewPage.buildEntry(entryList)
            }
        })

    } catch (e) {
        console.log(e)
        return
    }

    html += `
    </tbody></table>
`
    Element.mainContent.innerHTML = html
}

// function buildEntry(urls) {
//     return `
//     <tr>
//         <td>${urls.url}</td>
//         <td>${urls.descriptor.join(' ')}</td>
//     </tr>
// `
// }
