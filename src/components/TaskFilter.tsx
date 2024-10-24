import React, {FC} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import {InputType} from "../data/enums";
import {IFilter} from "../data/IInterfaces";
import MySelect from "./UI/MySelect/MySelect";

interface filterProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
}

const TaskFilter: FC<filterProps> = ({filter, setFilter}) => {
    return (
        <div className="search">
            <MyInput
                type={InputType.text}
                placeholder='Поиск'
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                defaultValue={filter.sort}
                onChange={(selectedSort: string) => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'completed', name: 'Выполнено'},
                    {value: '', name: 'Не выполнено'},
                ]}
                value={filter.sort}
            />
        </div>
    );
};

export default TaskFilter;