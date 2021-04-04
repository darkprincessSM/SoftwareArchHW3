import * as Routes from './controller/routes.js'

window.onload = () => {
    const path = window.location.pathname
    Routes.routing(path)
}

window.addEventListener('popstate', e => {
    e.preventDefault()
    const pathname = e.target.location.pathname
    Routes.routing(pathname)
})

import * as Auth from './controller/auth.js'
import * as HomePage from './viewpage/home_page.js'

HomePage.addEventListeners()
Auth.addEventListeners()