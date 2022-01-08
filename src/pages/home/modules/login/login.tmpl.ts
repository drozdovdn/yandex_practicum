export const loginTmpl = `
    <section class="login">
    {{title}}
    <div class="login__body">
     {{#with data}}
           <div class="login__input">{{input}}</div>
     {{/with}}
    </div>
    <div class="login__button">
     {{button}}
    </div>
   
    <a class="login__link" href="{{link.href}}">
        {{link.title}}
    </a>
    </section>
`