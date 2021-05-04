import "./styles.css";

const Lesson = ({ title, subtitle }) => {
    return(
        <div className="lesson-container">
            <p className="lesson-title">{title}</p>
            <p className="lesson-subtitle">{subtitle}</p>
        </div>
    );
}

export default Lesson;