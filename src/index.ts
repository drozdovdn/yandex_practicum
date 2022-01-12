import './main.pcss';
import {compile} from "./templater";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Error from "./pages/errors";

const root = document.querySelector('.root')

//Временные ссылки для демонстрации

const linksTemplate = `
    <nav class="links">
    <div>
        {{title}}
    </div>
    <ul class="links_list">
    <li class="links__item">
        <a href="{{profile.href}}">
            {{profile.name}}
        </a>
    </li>
    <li class="links__item">
        <a href="{{error_500.href}}">
            {{error_500.name}}
        </a>
    </li>
    <li class="links__item">
        <a href="{{error_404.href}}">
            {{error_404.name}}
        </a>
    </li>
    <li class="links__item">
        <a href="{{home.href}}">
        {{home.name}}
        </a>
    </li>
    </ul>
    </nav>
`

const linksContext = {
    title: 'Временные ссылки для перехода на страницы:',
    profile: {
        href: '#profile',
        name: 'Profile'
    },
    error_500: {
        href: '#error#_500_',
        name: 'Страница ошибки 500'
    },
    error_404: {
        href: '#error#_404_',
        name: 'Страница ошибки 404'
    },
    home: {
        href: '#home',
        name: 'Home'
    },
}



root.insertAdjacentHTML('afterbegin', compile(linksTemplate, linksContext))
root.insertAdjacentHTML('afterbegin', Home())

window.addEventListener('hashchange', ()=>{
    const {hash} = window.location
    if(hash.includes('home') || hash === '') {
        const home = document.querySelector('.home')
        const profile = document.querySelector('.profile')
        const errors = document.querySelector('.errors')
        profile?.remove()
        errors?.remove()
        if(!home) {
            root.insertAdjacentHTML('afterbegin', Home())
        }
    }
    if(hash.includes('profile')) {
        const home = document.querySelector('.home')
        const errors = document.querySelector('.errors')
        home?.remove()
        errors?.remove()
        root.insertAdjacentHTML('afterbegin', Profile())
    }
    if(hash.includes('error')) {
        const home = document.querySelector('.home')
        const profile = document.querySelector('.profile')
        const errors = document.querySelector('.errors')
        home?.remove()
        profile?.remove()
        if(!errors) {
            root.insertAdjacentHTML('afterbegin', Error())
        }
    }
})

