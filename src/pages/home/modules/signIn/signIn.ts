import '../form.pcss';
import {formTmpl} from "../form.tmpl";
import Input from "../../../../components/input";
import {compile} from "../../../../templater";
import Title from "../../../../components/title";
import Button from "../../../../components/button";



const signInContext = {
    title: Title('Вход'),
    className: 'sign-in',
    data: [
        {
            input:  Input({label: 'Логин', type: 'text', onChange: ()=>console.log('1111')})
        },
        {
            input:  Input({label: 'Пароль', type: 'password'})
        },
    ],
    button: Button({title: 'Авторизация'}),
    link: {
        title: 'Нет аккаунта?',
        href: '#signup',
    }
}

export const SignIn = () => {
    return compile(formTmpl, signInContext)
}

function onChange1() {
    console.log('onChange1')
}