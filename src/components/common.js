import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import '../styles/signup_page.css';

export default function getIcons(){
    return (
        <div className="signup-social-logos">
                    <BsGoogle style={{fontSize:'30px', 'padding-right':'10px'}}/>
        <BsApple style={{fontSize:'30px', 'padding-right':'10px'}}/>
        <BsFacebook style={{fontSize:'30px', 'padding-right':'10px'}}/>
        </div>
    )
}