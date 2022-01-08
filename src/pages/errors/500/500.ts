import {compile} from "../../../templater";
import {errorTmpl} from "../error.tmpl";

const error500Context = {
    title: '500',
    desc: 'Мы уже фиксим',
    link: {
        title: 'Назад к чатам',
        href: '/chat'
    }
}

export const Error_500 = () => {
    return compile(errorTmpl, error500Context)
}