import './profile.pcss';
import SettingsProfile from "./modules/settings";
import {compile} from "../../templater";
import {profileTmpl} from "./profile.tmpl";
import Avatar from "./modules/avatar";
import BackPanel from "./modules/backPanel";
import Control from "./modules/control";

const profileContext = {
    backPanel: BackPanel(),
    avatar: Avatar(),
    settings: SettingsProfile(),
    control: Control()
}


export const Profile = () => {
    return compile(profileTmpl, profileContext)
}