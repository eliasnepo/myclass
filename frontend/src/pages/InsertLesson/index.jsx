import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { makePrivateRequest } from '../../core/utils/request';
import './styles.css';

const InsertLesson = () => {
    const { courseId } = useParams();
    const { handleSubmit, register } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const payload = {
            ...data,
            course: {
                id: courseId
            }
        }
        console.log(payload);
        makePrivateRequest({ url: ``})
    }

    const handleOnClickCancel = () => {
        history.push('../')
    }

    return (
        <div className="insert-lesson-container">
            <div className="insert-lesson-content">
                <h1>Inserir uma nova aula ou tarefa</h1>
                <form className="input-lesson-form">
                    <input 
                    className="input-lesson-title"
                    type="text" 
                    name="title"
                    placeholder="Título da aula ou tarefa!"
                    ref={register({
                        required: true
                    })}
                    />
                    <select
                    className="input-lesson-select"
                    name="status"
                    ref={register({
                        required: true
                    })}
                    >
                        <option value="LESSON" >Aula</option>
                        <option value="TASK" >Tarefa</option>
                    </select>
                    <textarea 
                    type="text" 
                    className="text-area-form"
                    name="subtitle"
                    placeholder="Insira a descrição da aula ou tarefa!"
                    ref={register()}
                    />
                </form>
                <div className="insert-lesson-actions">
                    <button onClick={handleOnClickCancel} className="insert-lesson-action-cancel">CANCELAR</button>
                    <button onClick={handleSubmit(onSubmit)} className="insert-lesson-action-submit">ENVIAR</button>
                </div>
            </div>
        </div>
    );
}

export default InsertLesson;