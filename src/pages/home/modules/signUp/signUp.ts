import '../form.pcss';
import {formTmpl} from "../form.tmpl";
import Title from "../../../../components/title";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import {compile} from "../../../../templater";


const signUpContext = {
    title: Title('Регистрация'),
    data: [
        {
            input:  Input({label: 'Почта', type: 'text'})
        },
        {
            input:  Input({label: 'Логин', type: 'text'})
        },
        {
            input:  Input({label: 'Имя', type: 'text'})
        },
        {
            input:  Input({label: 'Фамилия', type: 'text'})
        },
        {
            input:  Input({label: 'Телефон', type: 'text'})
        },
        {
            input:  Input({label: 'Пароль', type: 'password'})
        },
        {
            input:  Input({label: 'Пароль (ещё раз)', type: 'password'})
        },
    ],
    button: Button({title: 'Зарегистрироваться'}),
    link: {
        title: 'Войти',
        href: '/home/signin',
    }
}

export const SignUp = () => {
    return compile(formTmpl, signUpContext)
}