
import * as Constant from '../model/constant.js'

//database stuff will go here

export async function addUrlEntry(urlEntry) {
    const data = urlEntry.serialize()
    await firebase.firestore().collection(Constant.collectionName.URLS).add(data)
}