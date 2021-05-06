import './css/base.css';
import { ReactComponent as AuthImage } from '../../../core/assets/images/study.svg'

function AuthCard (props) {
    return(
        <div className="container-auth">
        <AuthImage className="auth-image"/>
        <div className="content-registrar">
          <div className="content-above-auth">
            <h1 className="content-title-registrar">{props.title}</h1>
          </div>
          {props.children}
        </div>
      </div>
    );
}

export default AuthCard;