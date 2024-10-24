export interface ITask {
    id: number,
    body: string,
    title: string,
    completed: boolean,
    date: number,
}

export interface IOption {
    value: string;
    name: string;
}

export interface IFilter {
    query: string;
    sort: string;
}
export interface TaskProp {
    [key: string]: any;
}