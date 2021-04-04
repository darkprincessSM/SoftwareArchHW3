import * as Element from '../viewpage/element.js'
import * as FirebaseController from './firebase_controller.js'
import * as Util from '../viewpage/util.js'
import { UrlEntry } from '../model/url_entry.js'

export let currentUser

export function addEventListeners() {

    Element.submitButton.addEventListener('click', async e => {
        e.preventDefault();
        const button = Element.submitButton
        const label = Util.disableButton(button)
        var text = Element.textbox1.value
        var arr = text.split(/\s+/)
        await addUrlEntry(arr)
        console.log(arr)
        Element.textbox2.innerHTML = text;
    })
}


async function addUrlEntry(arr) {
    const url = arr[0]
    let descriptor = ""
    for (let i = 1; i < arr.length; i++) {
        descriptor += arr[i] + " "
    }
    console.log(descriptor)

    const newUrl = new UrlEntry({ url, descriptor });

    try {
        await FirebaseController.addUrlEntry(newUrl)

        // Util.popupInfo("Success", `${product.name} added!`, 'modal-add-product')
    } catch (e) {
        console.log(e)
        // Util.popupInfo('Adding Product Failed!', JSON.stringify(e), 'modal-add-product')
    }
}




// async function sign_up(form) {
//     const email = form.email.value
//     const password = form.password.value
//     const passwordConfirm = form.passwordConfirm.value

//     Element.formSignUpPasswordError.innerHTML = ''
//     if (password != passwordConfirm) {
//         Element.formSignUpPasswordError.innerHTML = 'Two passwords do not match'
//         return
//     }
//     try {
//         await FirebaseController.createUser(email, password)
//         Util.popupInfo('Account Created', 'You are now signed in', 'modal-form-signup')
//     }
//     catch (e) {
//         if (Constant.DEV) console.log(e)
//         Util.popupInfo('Failed to create a new account', JSON.stringify(e), 'modal-form-signup')

//     }
// }

