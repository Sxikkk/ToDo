import React, {useEffect, useState} from 'react';
import TaskList from "../TaskList";
import MyModal from "../UI/MyModal/MyModal";
import TaskForm from "../TaskForm";
import MyButton from "../UI/MyButton/MyButton";
import TaskFilter from "../TaskFilter";
import {IFilter, ITask} from "../../data/IInterfaces";
import {useFilter} from "../../hooks/useFilter";

const Tasks = () => {
    const [modal, setModal] = useState(false);
    const [tasks, setTask] = useState<ITask[]>([]);
    const [count, setCount] = useState<number>(0);
    const [filter, setFilter] = useState<IFilter>({sort: '', query: ''});

    const sortedAndSearchedTasks = useFilter(tasks, filter.sort, filter.query);
    console.log(sortedAndSearchedTasks);

    useEffect(() => {
        setCount(tasks.length);
    }, [tasks])

    const openModal = () => {
        setModal(true);
    }

    const createTask = (newTask: ITask) => {
        setTask([...tasks, newTask]);
        setCount(tasks.length);
        setModal(false);
    }

    return (
        <div className="list">
            <div className="list-head">
                <MyModal visible={modal} setVisible={openModal}>
                    <TaskForm create={createTask}/>
                </MyModal>
                <h1>Список дел - {count}</h1>
                <MyButton onClick={openModal} defaultValue="Создать новое задание"/>
            </div>
            <TaskFilter
                filter={filter}
                setFilter={setFilter}
            />
            <TaskList tasks={tasks} setTasks={setTask} sortedAndSearchedTasks={sortedAndSearchedTasks}/>
        </div>
    );
};

export default Tasks;