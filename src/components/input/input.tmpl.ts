export const InputTmpl = `
<label>
    <span class="label">
      {{label}}
    </span>
    <input 
       class="input {{className}}" 
       type="{{type}}"
       name="{{name}}"
       onfocus="{{onfocus}}"
       onblur="{{onblur}}"
    />
</label>
`