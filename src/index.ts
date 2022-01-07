import Block from "./components/block";
import Input from "./components/input";
import Login from "./pages/home/modules/login";
import './main.css';

const root = document.querySelector('.root')

// root.insertAdjacentHTML('afterbegin', Block())
root.insertAdjacentHTML('afterbegin', Login())

root.insertAdjacentHTML('afterbegin', Input({
    label: 'Пароль',
    className: 'login',
    onfocus:()=>{console.log('FOCUS')
}}))