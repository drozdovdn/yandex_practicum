import './login.pcss';
import Input from "../../../../components/input";
import {compile} from "../../../../templater";
import {loginTmpl} from "./login.tmpl";
import Title from "../../../../components/title";
import Button from "../../../../components/button";


const loginContext = {
    title: Title('Вход'),
    data: [
        {
            input:  Input({label: 'Логин', type: 'text'})
        },
        {
            input:  Input({label: 'Пароль', type: 'password'})
        },
    ],
    button: Button({title: 'Авторизация'}),
    link: {
        title: 'Нет аккаунта?',
        href: '/home/signup',
    }

}

export const Login = () => {
    return compile(loginTmpl, loginContext)
}