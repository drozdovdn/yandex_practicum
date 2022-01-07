import {get} from "../utils/get";

/**
 * Шаблонизатор
 */

/**
 * Функция принимает шаблон и сонтекст, возвращает html
 */
export const compile = (template, context) => {
    const _context = {...context}
    let _template = `${template}`
    const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
    let key = null

    while ((key = TEMPLATE_REGEXP.exec(_template))) { //Выдергиваю по одному значения

        if (key[1]) {
            const tmplValue = key[1].trim();
            if(tmplValue.startsWith('#with')) { //Если это цикл
                //Передаю в функцию по обработке циклов шаблон и ключ начала цикла
               _template = processingWith(_template, key, _context)
                console.log({_template})
            }

            const data = get(_context, tmplValue);

            //Если это функция
            if (typeof data === "function") {
                console.log({data})
                window[tmplValue] = data;
                _template = _template.replace(
                    new RegExp(key[0], "gi"),
                    `window.${key[1].trim()}()`
                );
                continue;
            }

            _template = _template.replace(new RegExp(key[0], "gi"), data);
        }
    }


    return _template
}

/**
 * Функция обработки циклов {{#with data}} {{/with}}
 * @param template
 * @param startKey
 */
function processingWith (template: string, startKey: string[], context: object): string  {
    let _template = `${template}`
    let _context = {...context}
    let _startKey = [...startKey]
    let _dataWith = _startKey[1].trim()
    let key = null
    const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    let _endKey = null

    //В цикле нахожу последний ключ цикла
    while ((key = TEMPLATE_REGEXP.exec(_template))) {
        if (key[1]) {
            const tmplValue = key[1].trim();
            if(tmplValue.startsWith('/with')) {
                _endKey = key;
                break;
            }
        }
    }
    const start = _template.indexOf(_startKey[0])
    const end = _template.indexOf(_endKey[0]) + _endKey[0].length
    let dataWith = _template.slice(start, end) //получил зацикленный кусок шаблона
    const keyDataWith = _startKey[1].split(' ')[1].trim() //получил ключ данных для цикла
    const dataContextWith = get(_context, keyDataWith) //получил данные для цикла

    let dataWith2 = dataWith.replace(_startKey[0], '')
        dataWith2 = dataWith2.replace(_endKey[0], '')

    const result = dataContextWith.reduce((acc,item) => acc + ' ' + substitutionData(dataWith2, item),'')

    _template = _template.replace(dataWith, result)


    return _template
}


function substitutionData (tmpl: string, context: object): string {
    let _tmpl = `${tmpl}`
    let _context = {...context}
    let key = null
    const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    while ((key = TEMPLATE_REGEXP.exec(_tmpl))) {
        if (key[1]) {
            const tmplValue = key[1].trim();

            const data = get(_context, tmplValue);

            //Если это функция
            if (typeof data === "function") {
                window[tmplValue] = data;
                _tmpl = _tmpl.replace(
                    new RegExp(key[0], "gi"),
                    `window.${key[1].trim()}()`
                );
                continue;
            }

            _tmpl = _tmpl.replace(new RegExp(key[0], "gi"), data);
        }
    }
    return _tmpl
}