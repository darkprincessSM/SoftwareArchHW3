import * as Element from './element.js'
import * as Routes from '../controller/routes.js'
import * as Util from './util.js'
import * as KWIC from '../controller/kwic_controller.js'

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
    <button class="btn btn-primary" id="submit-button">Shift</button>
  </div>
   
    `
    Element.mainContent.innerHTML = html

    document.getElementById('submit-button').addEventListener('click', async () => {
        var text = document.getElementById('story').value.trim()
        var arr = text.split(/\s+/)

        await KWIC.addUrlEntry(arr)

        // try {
        //     const docId = await FirebaseController.deleteThread(threadId)
        //     history.pushState(null, null, Routes.routePath.HOME)
        //     HomePage.home_page_new()
        //     Util.popupInfo('Success', 'Thread Was Deleted')
        // } catch (e) {
        //     if (Constant.DEV) console(e)
        //     Util.popupInfo('Error', JSON.stringify(e))
        // }
    })
}

