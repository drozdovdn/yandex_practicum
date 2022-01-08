import './main.pcss';
import Home from "./pages/home";
import {Error} from "./pages/errors/error";
import {InputProfile} from "./components/inputProfile/inputProfile";
import {SettingsProfile} from "./pages/profile/modules/settings/settings";


const root = document.querySelector('.root')


// root.insertAdjacentHTML('afterbegin', Home())
// root.insertAdjacentHTML('afterbegin', Error())
root.insertAdjacentHTML('afterbegin', SettingsProfile())
// root.insertAdjacentHTML('afterbegin', InputProfile({
//     name: 'name',
//     value: 'yandex@mail.ru'
// }))
