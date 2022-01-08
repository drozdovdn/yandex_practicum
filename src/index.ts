import './main.pcss';
import Home from "./pages/home";
import {Error} from "./pages/errors/error";


const root = document.querySelector('.root')


// root.insertAdjacentHTML('afterbegin', Home())
root.insertAdjacentHTML('afterbegin', Error())
