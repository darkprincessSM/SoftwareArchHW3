import { UrlEntry } from '../model/url_entry.js'
import { Noise } from '../model/noise.js'
import * as FirebaseController from './firebase_controller.js'
import { CircularShift } from '../model/circular_shift.js'

let noisewords
let url

export async function addUrlEntry(arr) {
    url = arr[arr.length - 1]
    arr.pop()
    console.log(arr)


    //get noise words
    var val = document.getElementById('noise-words').value.trim()
    var noise = val.split(/\s+/)
    noisewords = new Noise({ words: noise })
    console.log(noisewords.words)

    //remove noise
    var descriptor = checkNoise(arr)
    console.log(descriptor)

    //add url_entry to firestore
    const newUrl = new UrlEntry({ url, descriptor });
    try {
        await FirebaseController.addUrlEntry(newUrl)
    } catch (e) {
        console.log(e)
    }

    //output to middle text box
    document.getElementById('story2').innerHTML = ""


    //circular shift
    var words = circularShift(arr)
    const circularFinal = new CircularShift({ words });


    // //alphabetically sort
    // orderFunc(arr)


    words.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })


    console.log('alpha sorting')
    document.getElementById('story3').innerHTML = `${words.join(' ')}`
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

function checkNoise(arr) {
    var arr_omit_noise = new Array();
    arr_omit_noise = arr.filter((el) => !noisewords.words.includes(el));
    console.log('arr no noise')
    console.log(arr_omit_noise)
    return arr_omit_noise
}

function circularShift(arr) {
    var word = ""
    var found = false
    var circular_array = new Array();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < noisewords.words.length; j++) {
            if (arr[0].toLowerCase() == noisewords.words[j]) {
                found = true;
            }
        }
        if (!found) {
            document.getElementById('story2').innerHTML += `${arr.join(' ')}  ${url}\n`;
            circular_array.push(arr.join(' '))
        }
        found = false;
        word = arr.shift()
        arr.push(word)
    }
    return circular_array
}