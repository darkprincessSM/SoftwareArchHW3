import { UrlEntry } from '../model/url_entry.js'
import { Noise } from '../model/noise.js'
import * as FirebaseController from './firebase_controller.js'
import { CircularShift } from '../model/circular_shift.js'
import { AlphabetSort } from '../model/alphabet_sort.js'

let noisewords

export async function addUrlEntry(lines, priority) {
    var alphabetical_array = new Array();
    let url
    var words

    for (let i = 0; i < lines.length; i++) {
        var arr = lines[i].split(/\s+/)
        if (arr == '') return
        url = arr[arr.length - 1]
        arr.pop()

        //get noise words
        var val = document.getElementById('noise-words').value.trim()
        var noise = val.split(/\s+/)
        noisewords = new Noise({ words: noise })

        var descriptor = arr
        //add url_entry to firestore
        const newUrl = new UrlEntry({ url, descriptor });
        try {
            await FirebaseController.addUrlEntry(newUrl)
        } catch (e) {
            console.log(e)
        }

        //output to middle text box
        if (priority == 1) { // shift first
            //circular shift
            var words = shift(arr, priority, url)
            const circularFinal = new CircularShift({ words });

            for (let i = 0; i < words.length; i++) {
                var line = words[i] + ' ' + url
                alphabetical_array.push(line)

            }
        }

        if (priority == 2) { // sort first
            var line = arr.join(' ') + ' ' + url
            alphabetical_array.push(line)

        }

    }
    //sort alphabetically
    if (priority == 1) {
        words = sort(alphabetical_array)
        const alphabetFinal = new AlphabetSort({ words })
        for (let i = 0; i < words.length; i++) {
            document.getElementById(`story3`).innerHTML += `${words[i]}\n`;
        }
    }
    if (priority == 2) {
        words = sort(alphabetical_array)
        const alphabetFinal = new AlphabetSort({ words })
        for (let i = 0; i < words.length; i++) {
            document.getElementById(`story2`).innerHTML += `${words[i]}\n`;
        }


        for (let i = 0; i < words.length; i++) {
            //circular shift
            var line = words[i].split(/\s+/)
            url = line[line.length - 1]
            line.pop()
            var shifted = shift(line, priority, url)
            const circularFinal = new CircularShift({ shifted })
        }
    }

}
function shift(arr, priority, url) {
    var url = url
    var word = ""
    var found = false
    var circular_array = new Array();
    var box = ''
    if (priority == 1) box = 'story2'
    if (priority == 2) box = 'story3'

    for (let i = 0; i < arr.length; i++) {
        //look for noise word at beginning
        for (let j = 0; j < noisewords.words.length; j++) {
            if (arr[0].toLowerCase() == noisewords.words[j].toLowerCase()) {
                found = true;
            }
        }
        //if no noise words are found...
        if (!found) {
            document.getElementById(`${box}`).innerHTML += `${arr.join(' ')}  ${url}\n`;
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