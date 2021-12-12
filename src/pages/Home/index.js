import React from 'react';
import { useEffect, useState, useRef } from "react";
import Form from '../../components/organisms/Form';
import PopUp from '../../components/organisms/PopUp';
import PopUpUpdate from '../../components/organisms/PopUpUpdate';
import TodoList from '../../components/organisms/TodoList';
import { StyledTitle } from './style';
import OButtonSection from '../../components/organisms/ButtonSection';

const Pages = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const [isPopUpUpdate, setIsPopUpUpdate] = useState(false)
    const [data, setData] = useState([]);
    const [dataUpdate, setDataUpdate] = useState([]);
    const [isFinish, setIsFinish] = useState(0);


    useEffect(() => {
        fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list").then(response => response.json()
        ).then(json => setData(json))
    }, [])

    const showPopUp = (id) => {
        setIsPopUp(!isPopUp)
        return setDataUpdate(data.filter(todo => todo.id == id))
    }


    const updateTodoList = (id) => {
        setIsPopUpUpdate(!isPopUpUpdate)
        return setDataUpdate(data.filter(todo => todo.id == id))
    }

    const deleteTodoList = (id) => {
        return setData(data.filter(todo => todo.id !== id))
    }

    const saveTodoList = (todoObj) => {
        let todoList = data;
        todoList.push(todoObj);
        setData(todoList)
    }


    return (
        <>
            <center>
                <StyledTitle>Todo List</StyledTitle>
            </center>
            <Form setData={setData} data={data} saveTodoList={saveTodoList} setIsFinish={setIsFinish} />

            <OButtonSection isFinish={isFinish} setIsFinish={setIsFinish} />

            <TodoList data={data} showPopUp={showPopUp} isFinish={isFinish} updateTodoList={updateTodoList} deleteTodoList={deleteTodoList} />

            {isPopUp && <PopUp popUp={isPopUp} setIsPopUp={setIsPopUp} sendData={dataUpdate} />}

            {isPopUpUpdate && <PopUpUpdate setIsFinish={setIsFinish} isPopUpUpdate={isPopUpUpdate} setIsPopUpUpdate={setIsPopUpUpdate} setData={setData} sendData={dataUpdate} />}
        </>
    )
}

export default Pages
