import "./changePassword.pcss";
import InputProfile from "../../../../components/inputProfile";
import {compile} from "../../../../templater";
import {changePasswordTmpl} from "./changePassword.tmpl";


const changePasswordContext = {
    data : [
        {
            inputProfile: InputProfile({name: 'Старый пароль', value: 'password', type: 'password'})
        },
        {
            inputProfile: InputProfile({name: 'Новый пароль', value: 'password', type: 'password'})
        },
        {
            inputProfile: InputProfile({name: 'Повторите новый пароль', value: 'password', type: 'password'})
        },
    ]
}

export const ChangePassword = () => {
    return compile(changePasswordTmpl, changePasswordContext)
}