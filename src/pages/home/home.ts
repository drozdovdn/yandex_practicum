import {compile} from "../../templater";
import {homeTmpl} from "./home.tmpl";
import './home.pcss';
import SignIn from "./modules/signIn";
import SignUp from "./modules/signUp";

const {href} = window.location

//Переменная хранящая в себе контент
let content = SignIn()

if(href.includes('home/signin')) {
    content = SignIn()
}

if(href.includes('home/signup')) {
    content = SignUp()
}

export const Home = () => {
    return compile(homeTmpl, {
        content: content
    })
}