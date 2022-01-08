
export const inputProfileTmpl = `
    <label class="profile__label">
    <span class="profile__input__name">{{name}}</span>
    <input 
           {{disabled}}
           type="{{type}}"
           value="{{value}}"
           class="profile__input"     
            />
    </label>
`