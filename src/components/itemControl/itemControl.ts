import './itemControl.pcss';
import {compile} from "../../templater";
import {itemControlTmpl} from "./itemControl.tmpl";

export const ItemControl = ({
                                title,
                                className = ''
}) => {
    return compile(itemControlTmpl, {title, className})
}