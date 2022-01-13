import './profile.pcss';
import SettingsProfile from "./modules/settings";
import {compile} from "../../templater";
import {profileTmpl} from "./profile.tmpl";
import Avatar from "./modules/avatar";
import BackPanel from "./modules/backPanel";
import Control from "./modules/control";
import Button from "../../components/button";

const profileContext = {
    backPanel: BackPanel(),
    avatar: Avatar(),
    settings: SettingsProfile(),
    control: Control()
}


export const Profile = () => {

    const root = document.querySelector('.root')

    root?.insertAdjacentHTML('afterbegin', compile(profileTmpl, profileContext))

    const changeButton: HTMLButtonElement = document.querySelector('.item-control__change-data')
    const controlBlock: HTMLElement = document.querySelector('.control')
    const profileControl: HTMLElement = document.querySelector('.profile__control')
    const inputSettings: NodeListOf<HTMLInputElement> = document.querySelectorAll('.profile__input')
    changeButton.onclick = ()=> {
        controlBlock.remove()
        inputSettings.forEach(item => item.removeAttribute('disabled'))
        profileControl?.insertAdjacentHTML('afterbegin', Button({title: 'Сохранить', className: 'profile__save-button'}))
        console.log({inputSettings})
    }

}