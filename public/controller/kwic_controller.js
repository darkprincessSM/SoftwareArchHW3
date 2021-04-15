import { UrlEntry } from '../model/url_entry.js'
import { Noise } from '../model/noise.js'
import * as FirebaseController from './firebase_controller.js'
import { CircularShift } from '../model/circular_shift.js'
import { AlphabetSort } from '../model/alphabet_sort.js'

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
    var words = shift(arr)
    const circularFinal = new CircularShift({ words });

    //alphabetically sort
    words = sort(words)

    for (let i = 0; i < words.length; i++) {
        document.getElementById('story3').innerHTML += `${words[i]} ${url}\n`;
    }

}

function checkNoise(arr) {
    var arr_omit_noise = new Array();
    arr_omit_noise = arr.filter((el) => !noisewords.words.includes(el));
    console.log('arr no noise')
    console.log(arr_omit_noise)
    return arr_omit_noise
}

function shift(arr) {
    var word = ""
    var found = false
    var circular_array = new Array();
    var upper = new Array()
    var lower = new Array()

    for (let i = 0; i < arr.length; i++) {
        //look for noise word at beginning
        for (let j = 0; j < noisewords.words.length; j++) {
            if (arr[0].toLowerCase() == noisewords.words[j].toLowerCase()) {
                found = true;
            }
        }
        //if no noise words are found...
        if (!found) {
            document.getElementById('story2').innerHTML += `${arr.join(' ')}  ${url}\n`;
            if (arr[0].charAt(0) === arr[0].charAt(0).toUpperCase() && /^\d+$/.test(arr[0].charAt(0)) == false) {
                upper.push(arr.join(' '))
                console.log('uppercase')
                console.log(arr.join(' '))

            }
            else {
                lower.push(arr.join(' '))
                console.log('lowerrcase')
                console.log(arr.join(' '))
            }
            circular_array.push(arr.join(' '))
        }
        found = false;
        word = arr.shift()
        arr.push(word)
    }
    return circular_array
}

function sort(words) {
    const caseSensitiveSort = (words = []) => {
        const sorter = (a, b) => {
            if (a === b) {
                return 0
            };
            if (a.charAt(0) === b.charAt(0)) {
                return sorter(a.slice(1), b.slice(1))
            }
            if (a.charAt(0).toLowerCase() === b.charAt(0).toLowerCase()) {
                if (/^[a-z]/.test(a.charAt(0)) && /^[A-Z]/.test(b.charAt(0))) {
                    return -1;
                };
                if (/^[a-z]/.test(b.charAt(0)) && /^[A-Z]/.test(a.charAt(0))) {
                    return 1;
                };
            };
            return a.localeCompare(b);
        };
        words.sort(sorter);
    }
    caseSensitiveSort(words);
    return words
}