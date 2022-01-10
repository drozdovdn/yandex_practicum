import './itemControl.pcss';
import {compile} from "../../templater";
import {itemControlTmpl} from "./itemControl.tmpl";

export const ItemControl = ({
                                title,
                                href = '#',
                                className = ''
}) => {
    return compile(itemControlTmpl, {title, className, href})
}