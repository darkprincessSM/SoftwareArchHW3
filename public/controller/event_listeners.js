import * as Element from '../viewpage/element.js'
import * as FirebaseController from './firebase_controller.js'
import * as Util from '../viewpage/util.js'
import { UrlEntry } from '../model/url_entry.js'

export let currentUser
export let priority

export function addEventListeners() {

    Element.submitButton.addEventListener('click', async e => {
        e.preventDefault();
        const button = Element.submitButton
        const label = Util.disableButton(button)
        var text = Element.textbox1.value.trim()
        var arr = text.split(/\s+/)

        await addUrlEntry(arr)
        Util.enableButton(button, label)
    })
}


async function addUrlEntry(arr) {
    const url = arr[arr.length - 1]
    let descriptor = ""
    arr.pop()
    console.log(arr)

    //assign values to url_entry 
    for (let i = 0; i < arr.length; i++) {
        descriptor += arr[i] + " "
    }

    //add url_entry to firestore
    const newUrl = new UrlEntry({ url, descriptor });

    try {
        await FirebaseController.addUrlEntry(newUrl)
        // Util.popupInfo("Success", `${product.name} added!`, 'modal-add-product')
    } catch (e) {
        console.log(e)
        // Util.popupInfo('Adding Product Failed!', JSON.stringify(e), 'modal-add-product')
    }

    //remove noise
    var noise = Element.noisebox.value.trim()
    var noisewords = noise.split(/\s+/)
    console.log(noisewords)

    //output to middle text box
    Element.textbox2.innerHTML = ""
    Element.textbox2.innerHTML += `${descriptor} ${url}\n`

    var word = ""

    for (let i = 1; i < arr.length; i++) {
        var found = false;
        word = arr.shift()
        arr.push(word)
        for (let j = 0; j < noisewords.length; j++) {
            if (arr[0].toLowerCase() == noisewords[j]) {
                found = true;
                console.log(found)
            }
        }
        if (!found) {
            Element.textbox2.innerHTML += `${arr.join(' ')}  ${url}\n`;
        }
    }

    //alphabetically sort


}

