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
        <label class="text-box-labels" for="noise-words">NoiseWords</label>
        <br />
        <textarea id="noise-words" name="noise-words" class="noise-text" rows="5" cols="33"> a an the and or of to be is in out by as at off
        </textarea>
    </div>

    <div class="inline-div">
        <label class="text-box-labels" for="story">Input</label><br />
        <textarea id="story" name="story" rows="5" cols="33"></textarea>
    </div>
    <div class="inline-div">
        <label class="text-box-labels" for="story">Middle</label><br />
        <textarea id="story2" name="story3" rows="5" cols="33"></textarea>
    </div>
    <div class="inline-div">
        <label class="text-box-labels" for="story">Final</label><br />
        <textarea id="story3" name="story3" rows="5" cols="33"></textarea>
    </div>
    <br />
    <br />
    <form id="priority-buttons" class="inline-div">
    <div class="btn-group-toggle inline-div" data-toggle="buttons">
        <label class="btn btn-outline-dark btn-lg">
            <input type="radio" name="priority" id="shift-first" value="1" checked /> Circular Shift
        </label>
        <label class="btn btn-outline-dark btn-lg">
            <input type="radio" name="priority" id="sort-first" value="2" checked /> Alphabetical Sort
        </label>
    </div>
    </form>

    <div class="input-submit-button inline-div">
    <button class="btn btn-secondary btn-lg" id="submit-button">Shift</button>
    </div>
    `
    Element.mainContent.innerHTML = html



    document.getElementById('submit-button').addEventListener('click', async () => {
        var form = document.getElementById("priority-buttons");
        var priority = form.elements["priority"].value
        var text = document.getElementById('story').value.trim()
        var lines = text.split(/\n/)
        if (lines == '') return
        document.getElementById('story2').innerHTML = ""
        document.getElementById('story3').innerHTML = ""
        await KWIC.addUrlEntry(lines, priority)
    })


}

