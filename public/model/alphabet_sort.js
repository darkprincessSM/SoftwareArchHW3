export class AlphabetSort {
    constructor(data) {
        this.words = data.words
    }
    serialize() {
        return {
            words: this.words,
        }
    }

    static deserialize(data) {//from firestore
        const a = new AlphabetSort(data.uid)
        a.words = data.words
        return a
    }

}