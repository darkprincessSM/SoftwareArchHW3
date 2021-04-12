import * as Element from './element.js'
import * as Routes from '../controller/routes.js'
import * as Util from '../viewpage/util.js'
import * as FirebaseController from '../controller/firebase_controller.js'
import * as Constant from '../model/constant.js'

export function addEventListeners() {
    Element.menuButtonView.addEventListener('click', async () => {
        console.log('test')
        history.pushState(null, null, Routes.routePathname.VIEW)
        const label = Util.disableButton(Element.menuButtonView)
        await view_page()
        Util.enableButton(Element.menuButtonView, label)
    })
}

export async function view_page() {
    let html = `<h1>Viewing Urls Database</h2>
    <table class="table table-striped">
    <thead>
        <tr>
        <th scope="col">Urls</th>
        <th scope="col">Descriptor</th>
        </tr>
        </thead>
        <tbody>
    `

    try {
        let urls = await FirebaseController.getEntryList()

        urls.forEach(urls => {
            html += buildProductCard(urls)
        })
    } catch (e) {
        if (Constant.DEV) console.log(e)
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