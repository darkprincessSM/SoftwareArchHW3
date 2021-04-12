
import * as Constant from '../model/constant.js'
import { UrlEntry } from '../model/url_entry.js'

//database stuff will go here

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
