import Error_404 from "./404";
import Error_500 from "./500";

const {href} = window.location

//Переменная хранящая в себе контент
let content = Error_404()

if(href.includes('error/404')) {
    content = Error_404()
}

if(href.includes('error/500')) {
        content = Error_500()
}

export const Error = () => {
    return content
}