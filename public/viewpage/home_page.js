import * as Element from './element.js'
import * as Routes from '../controller/routes.js'
import * as Util from '../viewpage/util.js'

let entries

export function addEventListeners() {
    Element.menuButtonHome.addEventListener('click', async () => {
        history.pushState(null, null, Routes.routePathname.HOME)
        const label = Util.disableButton(Element.menuButtonHome)
        await home_page()
        Util.enableButton(Element.menuButtonHome, label)
    })
}


export async function home_page() {
    // try {
    //     products = await FirebaseController.getEntryList()

    //     let index = 0
    //     products.forEach(product => {
    //         html += buildProductCard(product, index)
    //         ++index
    //     })
    // } catch (e) {
    //     if (ConstantSourceNode.DEV) console.log(e)
    //     Util.popupInfo('getProductList error', JSON.stringify(e))
    //     return
    // }
    // Element.mainContent.innerHTML = html
}

function buildProductCard(product, index) {
    return `
<div class="card" style="width: 18rem; display: inline-block;">
    <img src="${product.imageURL} class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">
        ${Util.currency(product.price)}<BR>
        ${product.summary}
        </p>
        <div class="container pt-3 bg-light ${Auth.currentUser ? 'd-block' : 'd-none'}">
            <form method="post" class="d-inline form-decrease-qty">
            <input type="hidden" name="index" value="${index}">
                <button class="btn btn-outline-danger" type="submit">&minus;</button>    
            </form>
            <div id="qty-${product.docId}" class ="container rounded text-center text-white bg-primary d-inline-block w-50">
                ${product.qty == null || product.qty == 0 ? 'Add' : product.qty}
            </div >
            <form method="post" class="d-inline form-increase-qty">
                <input type="hidden" name="index" value="${index}">
                <button class="btn btn-outline-danger" type="submit">&plus;</button>    
            </form>
        </div>
    </div >
</div >
    `

}

