import React, {FC, useState} from 'react';
import Task from "./Task/Task";
import {ITask, TaskProp} from "../data/IInterfaces";

interface Props {
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
    sortedAndSearchedTasks: TaskProp[];
}

const TaskList: FC<Props> = ({tasks, setTasks, sortedAndSearchedTasks}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const changeCheck = (checked: boolean) => {

    }

    const changeTitle = (taskTitle: string) => {
        let newTitle = prompt("Введите новый заголовок", taskTitle) || taskTitle;
        setTitle(newTitle);
        taskTitle = title;
    }

    const changeBody = (taskBody: string) => {
        let newBody = prompt("Введите новый заголовок", taskBody) || taskBody;
        setBody(newBody);
        taskBody = body;
    }

    const taskDelete = (task: number) => {
        setTasks(tasks.filter((t) => t.id !== task));
    }

    return (
            <div className="list-items">
                {sortedAndSearchedTasks.map((task, index) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        completed={task.completed}
                        date={Date.now()}
                        id={index + 1}
                        body={task.body}
                        remove={() => taskDelete(task.id)}
                        changeTitle={() => changeTitle(task.title)}
                        changeBody={() => changeBody(task.body)}
                        changeCheckbox={() => changeCheck(task.completed)}
                    />

                ))}
            </div>
    );
};

export default TaskList;