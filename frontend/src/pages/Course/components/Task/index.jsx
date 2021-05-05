import { isAllowedByRole } from '../../../../core/utils/auth';
import './styles.css';

const Task = ({ title, subtitle }) => {
    return(
        <div className="task-container">
            <div className="content-left">
                <p className="content-left-title">{title}</p>
                <p className="content-left-subtitle">{subtitle}</p>
            </div>
            {isAllowedByRole(['ROLE_STUDENT']) && (
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