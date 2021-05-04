import './styles.css';

const Task = () => {
    return(
        <div className="task-container">
            <div className="content-left">
                <p className="content-left-title">Tarefa 01 - Exercício sobre parametrização de curvas</p>
                    <form className="content-left-actions">
                        <input 
                        type="text" 
                        placeholder="Insira o link da sua tarefa."
                        className="input-form-left"
                        />
                        <button className="button-form-left" >ENVIAR</button>
                    </form>
            </div>
            <div className="content-right">
                <p className="content-right-title">TAREFA REJEITADA</p>
                <p className="content-right-subtitle">Faltou demonstrar o teorema de green djoieajfoaejdpakfopaekdopakfpajfioaejdoaekdopaekfopaed kaeopdkaopdeadadasdasds</p>
            </div>
        </div>
    );
}

export default Task;