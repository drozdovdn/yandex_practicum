import "./avatar.pcss";
import {compile} from "../../../../templater";
import {avatarTmpl} from "./avatar.tmpl";

const avatarContext = {
    src: '',
    name: 'Иван',
    hover: {
        href: '#',
        text: 'Поменять аватар'
    }
}

export const Avatar = () => {
    return compile(avatarTmpl, avatarContext)
}