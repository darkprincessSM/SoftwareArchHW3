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
    let html = `
   
    <div class="noise-box">
    <label class="text-box-labels" for="noise-words">NoiseWords</label
    ><br />
    <textarea
      id="noise-words"
      name="noise-words"
      class="noise-text"
      rows="5"
      cols="33"
    >
a an the and or of to be is in out by as at off</textarea
    >
  </div>

  <div class="inline-div">
    <label class="text-box-labels" for="story">Input</label><br />
    <textarea id="story" name="story" rows="5" cols="33"></textarea>
  </div>
  <div class="inline-div">
    <label class="text-box-labels" for="story">Middle Shift</label><br />
    <textarea id="story2" name="story3" rows="5" cols="33"></textarea>
  </div>
  <div class="inline-div">
    <label class="text-box-labels" for="story">Final Shift</label><br />
    <textarea id="story3" name="story3" rows="5" cols="33"></textarea>
  </div>
  <br /><br />

  <div class="btn-group-toggle inline-div" data-toggle="buttons">
    <label class="btn btn-secondary active">
      <input type="checkbox" checked /> Circular Shift
    </label>
    <label class="btn btn-secondary">
      <input type="checkbox" checked /> Alphabetical Sort
    </label>
  </div>
  <div class="input-submit-button inline-div">
    <button class="btn btn-primary" id="submit">Shift</button>
  </div>
   
    `
    Element.mainContent.innerHTML = html
}

function buildProductCard(product, index) {
    return
    // <div class="card" style="width: 18rem; display: inline-block;">
    //     <img src="${product.imageURL} class="card-img-top">
    //     <div class="card-body">
    //         <h5 class="card-title">${product.name}</h5>
    //         <p class="card-text">
    //         ${Util.currency(product.price)}<BR>
    //         ${product.summary}
    //         </p>
    //         <div class="container pt-3 bg-light ${Auth.currentUser ? 'd-block' : 'd-none'}">
    //             <form method="post" class="d-inline form-decrease-qty">
    //             <input type="hidden" name="index" value="${index}">
    //                 <button class="btn btn-outline-danger" type="submit">&minus;</button>    
    //             </form>
    //             <div id="qty-${product.docId}" class ="container rounded text-center text-white bg-primary d-inline-block w-50">
    //                 ${product.qty == null || product.qty == 0 ? 'Add' : product.qty}
    //             </div >
    //             <form method="post" class="d-inline form-increase-qty">
    //                 <input type="hidden" name="index" value="${index}">
    //                 <button class="btn btn-outline-danger" type="submit">&plus;</button>    
    //             </form>
    //         </div>
    //     </div >
    // </div >

}

