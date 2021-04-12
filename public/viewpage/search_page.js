import * as Element from './element.js'
import * as Util from './util.js'
import * as FirebaseController from '../controller/firebase_controller.js'
import * as Routes from '../controller/routes.js'

export function addEventListeners() {
    Element.formSearch.addEventListener('submit', async e => {
        e.preventDefault()
        console.log('111111')
        const keywords = e.target.searchKeywords.value.trim()
        if (keywords.length == 0) {
            console.log('nothing')
            return
        }
        else {
            const button = Element.formSearch.getElementsByTagName('button')[0]
            const label = Util.disableButton(button)
            const keywordsArray = keywords.toLowerCase().match(/\S+/g)
            const joinedSearchKeys = keywordsArray.join('+')
            history.pushState(null, null, Routes.routePathname.SEARCH + '#' + joinedSearchKeys)
            search_page(keywordsArray)
            Util.enableButton(button, label)
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
        console.log(keywordsArray)
        let entryList = await FirebaseController.searchEntries(keywordsArray)
        for (let i = 0; i < entryList.length; i++) {
            console.log(i)
            if (checker(entryList[i].descriptor, keywordsArray) == false) {
                console.log('false')
                entryList.splice(i, 1)
            }
        }

        entryList.forEach(entryList => {
            html += buildProductCard(entryList)
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

function buildProductCard(urls) {
    return `
    <tr>
        <td>${urls.url}</td>
        <td>${urls.descriptor}</td>
    </tr>
`
}
