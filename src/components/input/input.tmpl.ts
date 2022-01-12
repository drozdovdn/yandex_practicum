export const InputTmpl = `
<label>
    <input 
       class="input {{className}}" 
       type="{{type}}"
       onchange="{{onChange}}"
       required
    />
     <span class="label">
      {{label}}
    </span>
</label>
`