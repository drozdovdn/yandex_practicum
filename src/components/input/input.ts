import {compile} from "../../templater";
import {InputTmpl} from "./input.tmpl";
import './input.pcss';

type dataProps = {
    label: string,
    className?: string,
    onfocus?: ()=> void,
    onblur?: ()=> void
}

type InputProps = (data: dataProps) => string


export const Input: InputProps = ({
                                      label,
                                      className
}) => {

// //onFocus по умолчанию
// const _onFocus = () => {
//     const label = <HTMLLabelElement>document.querySelector('.label')
//     label.classList.add('active')
//
//     if(focus) {
//         focus()
//     }
// }
// //onBlur по умолчанию
// const _onBlur = () => {
//     const label = <HTMLLabelElement>document.querySelector('.label')
//     const input = <HTMLInputElement>document.querySelector('.input')
//
//     if(!input.value.length) {
//         label.classList.remove('active')
//     }
//
//     if(blur) {
//         blur()
//     }
// }

 return compile(InputTmpl, {
     label,
     className,
     type: 'text',
 })
}