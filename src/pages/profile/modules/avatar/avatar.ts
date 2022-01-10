import "./avatar.pcss";
import {compile} from "../../../../templater";
import {avatarTmpl} from "./avatar.tmpl";

const avatarContext = {
    src: '',
    name: 'Иван'
}

export const Avatar = () => {
    return compile(avatarTmpl, avatarContext)
}