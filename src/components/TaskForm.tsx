import React, {FC, useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import {InputType} from "../data/enums";
import MyButton from "./UI/MyButton/MyButton";
import {ITask} from "../data/IInterfaces";

interface taskFormProps {
    create: (newTask: ITask) => void;
}

const TaskForm: FC<taskFormProps> = ({create}) => {

    const [task, setTask] = useState<ITask>({title: '', body: '', completed: false, id: 0, date: 0});

    const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, title: e.target.value});
    }

    const changeBodyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, body: e.target.value});
    }

    const addNewTask = (e: React.ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newTask = {
            ...task,
            id: Date.now(),
            date: Date.now(),
        }
        console.log(newTask);
        create(newTask)
    }

    return (
        <form>
            <h2>Создать пост</h2>
            <div className="task-form_content">
                <MyInput type={InputType.text} placeholder='Название' onChange={changeTitleHandler}/>
                <MyInput type={InputType.text} placeholder='Содержание' onChange={changeBodyHandler}/>
                <MyButton onClick={addNewTask} defaultValue="Создать"/>
            </div>
        </form>
    );
};

export default TaskForm;