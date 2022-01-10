import "./chat.pcss";
import {compile} from "../../templater";
import {chatTmpl} from "./chat.tmpl";

const chatContext = {
    data: 'Заглушка для страницы чата'
}


export const Chat = () => {
    return compile(chatTmpl, chatContext)
}