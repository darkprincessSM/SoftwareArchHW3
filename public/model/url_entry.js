export class UrlEntry {
    constructor(data) {
        this.url = data.url
        this.descriptor = data.descriptor
    }

    serialize() {
        return {
            url: this.url,
            descriptor: this.descriptor,
        }
    }

    static deserialize(data) {//from firestore
        const ue = new UrlEntry(data.uid)
        ue.url = data.url
        ue.descriptor = data.descriptor
        return ue
    }


}