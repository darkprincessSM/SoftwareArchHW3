import * as Element from './element.js'
import * as Routes from '../controller/routes.js'
import * as Util from '../viewpage/util.js'


export function addEventListeners() {
    Element.menuButtonHome.addEventListener('click', async () => {
        history.pushState(null, null, Routes.routePathname.HOME)
        const label = Util.disableButton(Element.menuButtonHome)
        await home_page()
        Util.enableButton(Element.menuButtonHome, label)
    })
}


export async function home_page() {
    console.log('home')
}

