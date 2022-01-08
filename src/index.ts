import './main.pcss';
import Block from "./components/block";
import Input from "./components/input";
import Login from "./pages/home/modules/login";
import Button from "./components/button";
import Title from "./components/title";


const root = document.querySelector('.root')

// root.insertAdjacentHTML('afterbegin', Block())
root.insertAdjacentHTML('afterbegin', Login())
// root.insertAdjacentHTML('afterbegin', Button({title: 'sssss'}))
// root.insertAdjacentHTML('afterbegin', Title('sssss'))

// root.insertAdjacentHTML('afterbegin', Input({
//     label: 'Пароль',
//     className: 'login',
//     onfocus:()=>{console.log('FOCUS')
// }}))