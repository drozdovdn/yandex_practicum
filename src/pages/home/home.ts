import {compile} from "../../templater";
import {homeTmpl} from "./home.tmpl";
import './home.pcss';
import SignIn from "./modules/signIn";
import SignUp from "./modules/signUp";
//Переменная хранящая в себе контент
let content = SignIn()

export const Home = () => {

    window.addEventListener('hashchange', ()=>{
        const {hash} = window.location

        if(hash.includes('signup')) {
            const sighIn = document.querySelector('.sign-in')
            const home = document.querySelector('.home')
            sighIn?.remove()
            home.insertAdjacentHTML('afterbegin', SignUp())
        }
        if(hash.includes('signin')) {
            const sighUp = document.querySelector('.sign-up')
            const home = document.querySelector('.home')
            sighUp?.remove()
            home.insertAdjacentHTML('afterbegin', SignIn())
        }
    })

    return compile(homeTmpl, {content})
}