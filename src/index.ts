import './main.pcss';
import Home from "./pages/home";
import {Error} from "./pages/errors/error";
import {InputProfile} from "./components/inputProfile/inputProfile";
import {SettingsProfile} from "./pages/profile/modules/settings/settings";
import SignIn from "./pages/home/modules/signIn";
import SignUp from "./pages/home/modules/signUp";


const root = document.querySelector('.root')

// root.insertAdjacentHTML('afterbegin', Home())


// window.addEventListener('hashchange', ()=>{
//     const {hash} = window.location
//
//     if(hash.includes('signup')) {
//         const sighIn = document.querySelector('.sign-in')
//         const home = document.querySelector('.home')
//         sighIn.remove()
//         home.insertAdjacentHTML('afterbegin', SignUp())
//     }
//     if(hash.includes('signin')) {
//         const sighUp = document.querySelector('.sign-up')
//         const home = document.querySelector('.home')
//         sighUp.remove()
//         home.insertAdjacentHTML('afterbegin', SignIn())
//     }
// })


// root.insertAdjacentHTML('afterbegin', Error())
root.insertAdjacentHTML('afterbegin', SettingsProfile())
// root.insertAdjacentHTML('afterbegin', InputProfile({
//     name: 'name',
//     value: 'yandex@mail.ru'
// }))
