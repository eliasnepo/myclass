import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './styles.css';

const InsertLesson = () => {
    const { handleSubmit, register } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
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