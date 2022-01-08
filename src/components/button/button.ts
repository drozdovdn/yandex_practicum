import {compile} from "../../templater";
import {buttonTmpl} from './button.tmpl';
import './button.pcss';

export const Button = ({
                           title,
                            className = ''
}) => {
    return compile(buttonTmpl, {title})
}