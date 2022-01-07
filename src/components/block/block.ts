import {blockTmpl} from "./block.tmpl";
import {compile} from "../../templater";
import './block.css';

const context = {
    field1: 'Text 1',
    field2: 42,
    field3: {
        info: {
            name: 'Simon',
        }
    }
}

export const Block = () => {
    return compile(blockTmpl, context)
}




