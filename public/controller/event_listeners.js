import * as Element from '../viewpage/element.js'
import * as Util from '../viewpage/util.js'
import * as KWIC from './kwic_controller.js'

export let currentUser
export let priority

export function addEventListeners() {

    Element.submitButton.addEventListener('click', async e => {
        e.preventDefault();
        const button = Element.submitButton
        const label = Util.disableButton(button)
        var text = Element.textbox1.value.trim()
        var arr = text.split(/\s+/)

        await KWIC.addUrlEntry(arr)
        Util.enableButton(button, label)
    })
}