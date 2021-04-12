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
    orderFunc(arr)
    console.log('alpha sorting')
    console.log(arr)
}

function orderFunc(arr) {
    arr.sort(function (a, b) {
        return charCompare(a, b, 0);
    });
}

function charCompare(a, b, index) {

    var rules = ["a ", "a", "A ", "A", "b ", "b", "B ", "B", "c ", "c", "C ", "C", "d ", "d", "D ", "D", "e ", "e", "E ", "E", "f ", "f", "F ", "F", "g ", "g", "G ", "G", "h ", "h"
        + "H ", "H", "i ", "i", "I ", "I", "j ", "j", "J ", "J", "k ", "k", "K ", "K", "l ", "l", "L ", "L", "m ", "m", "M ", "M", "n ", "n", "N ", "N", "o ", "o", "O ", "O"
        + "p ", "p", "P ", "P", "q ", "q", "Q ", "Q", "r ", "r", "R ", "R", "s ", "s", "S ", "S", "t ", "t", "T ", "T", "u ", "u", "U ", "U", "v ", "v", "V ", "V", "w ", "w"
        + "W ", "W", "x ", "x", "X ", "X", "y ", "y", "Y ", "Y", "z ", "z", "Z ", "Z"];

    if (index == a.length || index == b.length)
        return 0;
    //toUpperCase: isn't case sensitive
    var aChar = rules.indexOf(a.toUpperCase().charAt(index));
    var bChar = rules.indexOf(b.toUpperCase().charAt(index));
    if (aChar != bChar)
        return aChar - bChar
    else
        return charCompare(a, b, index + 1)
}

