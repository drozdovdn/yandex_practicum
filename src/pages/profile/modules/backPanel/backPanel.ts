import './backPanel.pcss';
import {compile} from "../../../../templater";
import {backPanelTmpl} from "./backPanel.tmpl";

const backPanelContext = {
    link: {
        href: '#chat',
        name: 'Назад'
    }
}

export const BackPanel = () => {
    return compile(backPanelTmpl, backPanelContext)
}