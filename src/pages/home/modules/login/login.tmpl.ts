export const loginTmpl = `
    <section>
     <h1>{{title}}</h1>
       {{#with data}}
           <div>{{input}}</div>
       {{ /with }}
       {{#with data2}}
           <div>{{input}}</div>
       {{ /with }}
     <button>{{button.title}}</button>
    </section>
`