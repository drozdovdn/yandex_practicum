import {compile} from "../../templater";
import {buttonTmpl} from './button.tmpl';
import './button.pcss';

export const Button = ({
                           name,
                           className = ''
}) => {
    return compile(buttonTmpl, {name, className})
}