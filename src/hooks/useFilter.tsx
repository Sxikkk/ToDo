import {useMemo} from "react";
import {TaskProp} from "../data/IInterfaces";

export const useSortedTasks = (tasks: TaskProp[], sort: string) => {
    const sortedTasks = useMemo(() => {
        if(sort) {
            return [...tasks].filter((task: TaskProp) => task.completed === Boolean(sort));
        }
        return tasks
    }, [tasks, sort]);
    return sortedTasks;
}

export const useFilter = (tasks: TaskProp[], sort: string, query: string): TaskProp[] => {
    const sortedTasks = useSortedTasks(tasks, sort);
    const sortedAndSearchedTasks = useMemo(() => {
        return sortedTasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedTasks]);

    return sortedAndSearchedTasks;
}