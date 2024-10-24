import React, {FC} from 'react';
import MyButton from "../UI/MyButton/MyButton";

interface TaskProps {
    id: number,
    body: string,
    title: string,
    completed: boolean,
    date: number,
    remove: () => void;
    changeBody: (body: string) => void;
    changeTitle: (title: string) => void;
    changeCheckbox?: (checked: boolean) => void;
}

const Task:FC<TaskProps> = ({id, title, completed, date, body, remove, changeBody, changeTitle, changeCheckbox}) => {

    return (
        <div className="task">
            <div className="task-head">
                <input type="checkbox" checked={completed} onChange={() => changeCheckbox} />
                <h2>{id} - {title}</h2>
                <p>{date}</p>
            </div>
            <div className="task-content">
                <p>{body}</p>
            </div>
            <div className="task-footer">
                <MyButton onClick={remove} defaultValue="Удалить"/>
                <MyButton onClick={changeTitle} defaultValue="Редактировать заголовок" />
                <MyButton onClick={changeBody} defaultValue="Редактировать содержимое"/>
            </div>
        </div>
    );
};

export default Task;