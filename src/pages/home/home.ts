import {compile} from "../../templater";
import {homeTmpl} from "./home.tmpl";
import './home.pcss';
import Login from "./modules/login";

const {href} = window.location

//Переменная хранящая в себе контент
let content = Login()

if(href.includes('home/signin')) {
    content = Login()
}

if(href.includes('home/signup')) {
    content = 'signup'
}

export const Home = () => {
    return compile(homeTmpl, {
        content: content
    })
}