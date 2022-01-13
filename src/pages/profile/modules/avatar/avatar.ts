import "./avatar.pcss";
import {compile} from "../../../../templater";
import {avatarTmpl} from "./avatar.tmpl";
import {FunProps} from "../../../../models";

const avatarContext = {
    src: '',
    name: 'Иван',
    hover: {
        href: '#',
        text: 'Поменять аватар'
    }
}

export const Avatar:FunProps = () => {
    return compile(avatarTmpl, avatarContext)
}