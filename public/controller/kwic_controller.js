import { UrlEntry } from '../model/url_entry.js'
import { Noise } from '../model/noise.js'
import * as Element from '../viewpage/element.js'
import * as FirebaseController from './firebase_controller.js'

export async function addUrlEntry(arr) {
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
    var val = document.getElementById('noise-words').value.trim()
    var noise = val.split(/\s+/)
    const noisewords = new Noise({ words: noise })

    console.log(noisewords.words)

    //output to middle text box
    document.getElementById('story2').innerHTML = ""
    document.getElementById('story2').innerHTML += `${descriptor} ${url}\n`

    var word = ""

    //circular shift
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
            document.getElementById('story2').innerHTML += `${arr.join(' ')}  ${url}\n`;
        }
    }

    //alphabetically sort
}

