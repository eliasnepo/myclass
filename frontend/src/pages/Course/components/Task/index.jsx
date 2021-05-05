import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { BASE_URL, getSessionData, isAllowedByRole } from '../../../../core/utils/auth';
import { makePrivateRequest } from '../../../../core/utils/request';
import './styles.css';

const Task = (props) => {
    // const [statusName, setStatusName] = useState('');
    const { handleSubmit, register } = useForm();
    const { courseId } = useParams();

    // useEffect(() => {
    //     if (props.delivery === "ACCEPTED") {
    //         setStatusName("aceita")
    //     } else if (props.delivery === "REJECTED") {
    //         setStatusName("rejeitada")
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const onSubmit = data => {
        const { userId } = getSessionData();
        const payload = {
            ...data,
            task: {
                id: props.id
            },
            course: {
                id: courseId
            },
            user: {
                id: userId
            }
        }
        makePrivateRequest({ url: `${BASE_URL}/deliveries`, method: 'POST', data: payload })
        .then(response => {
            window.location.reload();
        })
    }

    return(
        <div className="task-container">
            <div className="content-left">
                <p className="content-left-title">{props.title}</p>
                <p className="content-left-subtitle">{props.subtitle}</p>
            </div>
            {isAllowedByRole(['ROLE_STUDENT']) && (!props.hide) && (
                <div className="content-right">
                    {props.delivery === "PENDING" ? <small className="pending-task-message">Tarefa já enviada! Aguardando correção do professor.</small> : null}
                    <form 
                    className="content-right-actions"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                        <input 
                        type="text" 
                        placeholder="Insira o link da sua tarefa."
                        className="input-form-right"
                        name="uri"
                        ref={register({
                            required: true
                        })}
                        />
                        <button className="button-form-right" >ENVIAR</button>
                    </form>
                </div>
            )}
            {(isAllowedByRole(['ROLE_STUDENT']) && (props.hide)) ? 
                <div className="content-right">
                    {props.delivery === "ACCEPTED" ? <h2 className={`${props.delivery}`}>Tarefa aceita</h2> : <h2 className={`${props.delivery}`}>Tarefa rejeitada</h2>}
                    <p>{props.feedback}</p>
                </div>
            : 
            null}
        </div>
    );
}

export default Task;