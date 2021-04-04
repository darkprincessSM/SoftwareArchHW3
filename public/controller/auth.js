import * as Element from '../viewpage/element.js'
import * as FirebaseController from './firebase_controller.js'

export let currentUser

export function addEventListeners() {

    Element.submitButton.addEventListener('click', () => {
        var text = Element.textbox1.value
        var arr = text.split(/\s+/)
        console.log(arr)
        Element.textbox2.innerHTML = text;
    })

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

