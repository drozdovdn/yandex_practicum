import Error_404 from "./modules/404";
import Error_500 from "./modules/500";
import {compile} from "../../templater";
import {errorsTmpl} from "./errors.tmpl";

//Переменная хранящая в себе контент
const {hash} = window.location
console.log({hash})
let content = Error_404()

export const Errors = () => {
    window.addEventListener('hashchange', ()=>{
        const {hash} = window.location
        console.log({hash})
        if(hash.includes('_404_')) {
            const _500 = document.querySelector('._500')
            const errors = document.querySelector('.errors')
            _500?.remove()
            errors.insertAdjacentHTML('afterbegin', Error_404())
        }
        if(hash.includes('_500_')) {
            const _404 = document.querySelector('._404')
            const errors = document.querySelector('.errors')
            _404?.remove()
            errors.insertAdjacentHTML('afterbegin', Error_500())
        }
    })

    return compile(errorsTmpl, {content})
}