import Input from "../../../../components/input";
import {compile} from "../../../../templater";
import {loginTmpl} from "./login.tmpl";

const loginContext = {
    title: 'Вход',
    data: [
        {
            input:  Input({label: 'Логин'})
        },
        {
            input:  Input({label: 'Пароль'})
        },
    ],
    data2: [
        {
            input:  Input({label: 'Логин'})
        },
        {
            input:  Input({label: 'Пароль'})
        },
        {
            input:  Input({label: 'Пароль'})
        },
    ],
    button: {
        title: 'Авторизация'
    }
}

export const Login = () => {
    return compile(loginTmpl, loginContext)
}