import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../../../core/utils/auth';
import { makePrivateRequest } from '../../../core/utils/request';
import './styles.css';

const CardDelivery = (props) => {
    const [statusName, setStatusName] = useState('');
    const { handleSubmit, register } = useForm();

    let data = new Date(props.createdAt);

    function formatDate(time) {
        const formatter = new Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          minimumIntegerDigits: 2,
        });
      
        return formatter.format(time);
    }

    useEffect(() => {
        if (props.status === "PENDING") {
            setStatusName("PENDENTE")
        } else if (props.status === "ACCEPTED") {
            setStatusName("ACEITO")
        } else {
            setStatusName("REJEITADO")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = data => {
        makePrivateRequest({ url: `${BASE_URL}/deliveries/${props.id}`, method: 'PUT', data })
        .then(response => {
            window.location.reload();
        })
    }

    return (
        <div className="card-delivery-container">
            <h1 className={`title-card-delivery ${props.status}`}>{statusName}</h1>
            <div className="content-info-above">
                <p className="uri-link"><strong>Tarefa:</strong> {props.lesson.title}</p>
                <p className="uri-link"><strong>Resolução:</strong> {props.uri}</p>
                <p><strong>Aluno:</strong> {props.user.name}</p>
                <p><strong>Data:</strong> {`${data.toLocaleDateString("pt-br")} às ${formatDate(data.getHours())}:${formatDate(data.getMinutes())}`}</p>
            </div>
            <div className={`feedback-display ${props.status === "ACCEPTED" || props.status === "REJECTED" ? 'show-feedback' : ''}`}>
                <p><strong>Feedback: </strong>{props.feedback}</p>
            </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className={`form-card-delivery ${props.status === "ACCEPTED" || props.status === "REJECTED" ? 'hide-form' : ''}`}
            >
                <textarea
                placeholder="Insira o feedback da revisão (max 90 caracteres)."
                name="feedback"
                ref={register({
                    required: true
                })}
                >

                </textarea>
                <div className="label-group">
                    <input type="radio" name="status" value="ACCEPTED" ref={register({
                        required: true
                    })}/>
                    <label>Aceitar</label>
                </div>
                <div className="label-group">
                    <input type="radio" name="status" value="REJECTED" ref={register({
                        required: true
                    })}/>
                    <label>Rejeitar</label>
                </div>
                <button
                className="button-save-revision"
                >
                    CORRIGIR
                </button>
            </form>
        </div>

    );
}

export default CardDelivery;