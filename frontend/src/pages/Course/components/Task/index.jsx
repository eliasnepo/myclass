import { isAllowedByRole } from '../../../../core/utils/auth';
import './styles.css';

const Task = (props) => {
    return(
        <div className="task-container">
            <div className="content-left">
                <p className="content-left-title">{props.title}</p>
                <p className="content-left-subtitle">{props.subtitle}</p>
            </div>
            {isAllowedByRole(['ROLE_STUDENT']) && (!props.hide) && (
                <div className="content-right">
                    <form className="content-right-actions">
                        <input 
                        type="text" 
                        placeholder="Insira o link da sua tarefa."
                        className="input-form-right"
                        />
                        <button className="button-form-right" >ENVIAR</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Task;