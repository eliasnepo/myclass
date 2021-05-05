import { useEffect, useState } from 'react';
import { isAllowedByRole } from '../../../../core/utils/auth';
import './styles.css';

const Task = (props) => {
    const [statusName, setStatusName] = useState('');

    useEffect(() => {
        if (props.delivery === "PENDING") {
            setStatusName("pendente")
        } else if (props.delivery === "ACCEPTED") {
            setStatusName("aceita")
        } else {
            setStatusName("rejeitada")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="task-container">
            <div className="content-left">
                <p className="content-left-title">{props.title}</p>
                <p className="content-left-subtitle">{props.subtitle}</p>
            </div>
            {isAllowedByRole(['ROLE_STUDENT']) && (!props.hide) && (
                <div className="content-right">
                    {props.delivery === "PENDING" ? <small className="pending-task-message">Tarefa já enviada! Aguardando correção do professor.</small> : null}
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
            {(isAllowedByRole(['ROLE_STUDENT']) && (props.hide)) ? 
                <div className="content-right">
                    <h2 className={`${props.delivery}`}>Tarefa {statusName}</h2>
                    <p>{props.feedback}</p>
                </div>
            : 
            null}
        </div>
    );
}

export default Task;