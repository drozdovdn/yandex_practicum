import '../error.pcss';
import {compile} from "../../../templater";
import {errorTmpl} from "../error.tmpl";

const error404Context = {
    title: '404',
    desc: 'Не туда попали',
    link: {
        title: 'Назад к чатам',
        href: '/chat'
    }
}

export const Error_404 = () => {
    return compile(errorTmpl, error404Context)
}