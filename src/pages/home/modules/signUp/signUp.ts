import '../form.pcss';
import {formTmpl} from "../form.tmpl";
import Title from "../../../../components/title";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import {compile} from "../../../../templater";

const signUpContext = {
    title: Title('Регистрация'),
    className: 'sign-up',
    data: [
        {
            input:  Input({label: 'Почта', type: 'text', name: 'email'})
        },
        {
            input:  Input({label: 'Логин', type: 'text', name: 'login'})
        },
        {
            input:  Input({label: 'Имя', type: 'text', name: 'first_name'})
        },
        {
            input:  Input({label: 'Фамилия', type: 'text', name: 'second_name'})
        },
        {
            input:  Input({label: 'Телефон', type: 'text', name: 'phone'})
        },
        {
            input:  Input({label: 'Пароль', type: 'password', name: 'password'})
        },
        {
            input:  Input({label: 'Пароль (ещё раз)', type: 'password', name: 'repeat_password'})
        },
    ],
    button: Button({title: 'Зарегистрироваться'}),
    link: {
        title: 'Войти',
        href: '#home#signin',
    }
}

export const SignUp = () => {
    return compile(formTmpl, signUpContext)
}