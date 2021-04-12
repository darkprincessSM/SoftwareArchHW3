import { UrlEntry } from '../model/url_entry.js'
import { Noise } from '../model/noise.js'
import * as FirebaseController from './firebase_controller.js'

export async function addUrlEntry(arr) {
    const url = arr[arr.length - 1]
    let descriptorString = ""
    arr.pop()
    console.log(arr)

    //assign values to url_entry 
    for (let i = 0; i < arr.length; i++) {
        descriptorString += arr[i] + " "
    }
    const descriptor = descriptorString.toLowerCase().match(/\S+/g)
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
    document.getElementById('story2').innerHTML += `${descriptorString} ${url}\n`

    var word = ""

    //circular shift
    for (let i = 1; i < arr.length; i++) {
        var found = false;
        word = arr.shift()
        arr.push(word)
        for (let j = 0; j < noisewords.words.length; j++) {
            if (arr[0].toLowerCase() == noisewords.words[j]) {
                found = true;
                console.log(found)
            }
        }
        if (!found) {
            document.getElementById('story2').innerHTML += `${arr.join(' ')}  ${url}\n`;
        }
    }
    //alphabetically sort
    // orderFunc(arr)


    arr.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })


    console.log('alpha sorting')
    document.getElementById('story3').innerHTML = `${arr.join(' ')}`
}

// function orderFunc(arr) {
//     arr.sort(function (a, b) {
//         return charCompare(a, b, 0);
//     });
// }

// function charCompare(a, b, index) {

//     var rules = [" ", "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

//     if (index == a.length || index == b.length)
//         return 0;
//     //toUpperCase: isn't case sensitive
//     var aChar = rules.indexOf(a.toUpperCase().charAt(index));
//     var bChar = rules.indexOf(b.toUpperCase().charAt(index));
//     if (aChar != bChar)
//         return aChar - bChar
//     else
//         return charCompare(a, b, index + 1)
// }

export function checkResulte() {

}

