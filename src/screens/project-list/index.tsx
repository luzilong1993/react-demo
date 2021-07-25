import React, { useState, useEffect } from 'react';
import { SearchPanel } from "./search-panel";
import { List } from "./list"
import { cleanObject, useDebounce, useMount } from '../../util/index';
import qs from "qs"
import { useHttp } from 'util/http';

const apiUrl = process.env.REACT_APP_API_URL


const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const client = useHttp()

    const debouncedParam = useDebounce(param, 2000)

    useEffect(() => {
        client('projects',{
            data:cleanObject(debouncedParam)
        }).then(setList)
    }, [debouncedParam])

    useMount(() => {
        client('users',{}).then(setUsers)
    })

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </div>
    )
}

export default ProjectListScreen