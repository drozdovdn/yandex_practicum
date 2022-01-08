import {compile} from "../../templater";
import { inputProfileTmpl } from "./inputProfile.tmpl";
import './inputProfile.pcss'

export const InputProfile = ({
                                name,
                                value,
                                type = 'text',
                                disabled = 'disabled'
                             }) => {
    return compile(inputProfileTmpl, {
        name,
        value,
        type,
        disabled,
    })
}