import './main.pcss';
import Home from "./pages/home";


const root = document.querySelector('.root')


root.insertAdjacentHTML('afterbegin', Home())
