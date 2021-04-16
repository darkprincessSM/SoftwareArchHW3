import * as Element from './element.js'
import * as Util from './util.js'
import * as FirebaseController from '../controller/firebase_controller.js'
import * as Routes from '../controller/routes.js'

export function addEventListeners() {
    Element.formSearch.addEventListener('submit', async e => {
        e.preventDefault()

        const keywords = e.target.searchKeywords.value.trim()
        if (keywords.length == 0) {
            return
        }
        else {
            const label = Util.disableButton(Element.searchButton)
            var keywordsArray = keywords.match(/\S+/g)

            var val = document.getElementById('current-noise-words').value.trim()
            var noise = val.split(/\s+/)
            var noNoiseKeyWords = keywordsArray.filter(function (el) {
                return noise.indexOf(el) < 0;
            });

            const joinedSearchKeys = noNoiseKeyWords.join('+')
            history.pushState(null, null, Routes.routePathname.SEARCH + '#' + joinedSearchKeys)
            search_page(noNoiseKeyWords)
            Util.enableButton(Element.searchButton, label)
        }
    })
}

export async function search_page(noNoiseKeyWords) {
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
        let entryList = await FirebaseController.getEntryList()
        var tempArray = new Array();

        for (let i = 0; i < noNoiseKeyWords.length; i++) {
            var word = noNoiseKeyWords[i].toLowerCase()
            noNoiseKeyWords[i] = word
        }

        entryList.forEach(entryList => {
            var temp = entryList.descriptor.join(' ')
            var arr = temp.toLowerCase()
            tempArray = arr.split(/\s+/)
            if (checker(tempArray, noNoiseKeyWords) != false) {
                html += buildEntry(entryList)
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

function buildEntry(urls) {
    return `
    <tr>
        <td>${urls.url}</td>
        <td>${urls.descriptor.join(' ')}</td>
    </tr>
`
}
