import { AlphabetSort } from '../model/alphabet_sort.js'
import * as Constant from '../model/constant.js'
import { UrlEntry } from '../model/url_entry.js'

export async function addUrlEntry(urlEntry) {
    const data = urlEntry.serialize()
    await firebase.firestore().collection(Constant.collectionName.URLS).add(data)
}

export async function getEntryList() {
    let entries = []
    const snapShot = await firebase.firestore()
        .collection(Constant.collectionName.URLS)
        .orderBy('descriptor')
        .get()
    snapShot.forEach(doc => {
        const p = new UrlEntry(doc.data())
        p.docId = doc.id
        entries.push(p)

    })
    return entries
}

export async function searchEntries(descriptor) {
    const entryList = []
    const snapShot = await firebase.firestore().collection(Constant.collectionName.URLS)
        .where('descriptor', 'array-contains-any', descriptor)
        .orderBy('url', 'desc')
        .get()
    snapShot.forEach(doc => {
        const t = new UrlEntry(doc.data())
        t.docId = doc.id
        entryList.push(t)
    })
    return entryList
}

