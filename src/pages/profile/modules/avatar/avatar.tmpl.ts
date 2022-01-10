
export const avatarTmpl = `
    <div class="avatar">
    <div class="avatar__wrapper-img">
       <img class="avatar__img" 
             src="avatar_icon.svg" 
             alt="Аватар"
       >
       <a class="avatar__hover" href="{{hover.href}}"></a>
       <span class="avatar__text">{{hover.text}}</span>
    </div>
    <div class="avatar__name">{{name}}</div>
    </div>
`;