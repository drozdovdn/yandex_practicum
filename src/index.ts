import './main.pcss';
import Home from "./pages/home";
import {Error} from "./pages/errors/error";
import {InputProfile} from "./components/inputProfile/inputProfile";
import {SettingsProfile} from "./pages/profile/modules/settings/settings";
import SignIn from "./pages/home/modules/signIn";
import SignUp from "./pages/home/modules/signUp";
import {Profile} from "./pages/profile/profile";
import ItemControl from "./components/itemControl";
import ChangePassword from "./pages/profile/modules/changePassword";
import Chat from "./pages/chat";


const root = document.querySelector('.root')

// root.insertAdjacentHTML('afterbegin', Home())
//
//
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
// root.insertAdjacentHTML('afterbegin', ChangePassword())
root.insertAdjacentHTML('afterbegin', Chat())
// root.insertAdjacentHTML('afterbegin', Profile())
// root.insertAdjacentHTML('afterbegin', ItemControl({title: 'Изменить данные' , className: 'item-control_green'}))
// root.insertAdjacentHTML('afterbegin', SettingsProfile())
// root.insertAdjacentHTML('afterbegin', InputProfile({
//     name: 'name',
//     value: 'yandex@mail.ru'
// }))
