import '../form.pcss';
import {formTmpl} from "../form.tmpl";
import Input from "../../../../components/input";
import {compile} from "../../../../templater";
import Title from "../../../../components/title";
import Button from "../../../../components/button";



const signInContext = {
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

export const SignIn = () => {
    return compile(formTmpl, signInContext)
}