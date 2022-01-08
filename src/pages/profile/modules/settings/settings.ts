import './settinps.pcss'
import {InputProfile} from "../../../../components/inputProfile/inputProfile";
import {compile} from "../../../../templater";
import {settingsTmpl} from "./settings.tmpl";

const settingsContext = {
    data: [
        {
            input: InputProfile({name: 'Почта', value: 'pochta@yandex.ru'})
        },
        {
            input: InputProfile({name: 'Логин', value: 'ivanivanov'})
        },
        {
            input: InputProfile({name: 'Имя', value: 'Иван'})
        },
        {
            input: InputProfile({name: 'Фамилия', value: 'Иванов'})
        },
        {
            input: InputProfile({name: 'Имя в чате', value: 'Иван'})
        },
        {
            input: InputProfile({name: 'Телефон', value: '+7 (909) 967 30 30'})
        },
    ]
};

export const SettingsProfile = () => {
    return compile(settingsTmpl, settingsContext)
}