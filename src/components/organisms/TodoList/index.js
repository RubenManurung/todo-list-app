import React, { useEffect, useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';
import { StyledUl, StyledDiv, StyledIcon } from "./style"

const TodoList = (props) => {

    return (

        <StyledUl>
            {props.data?.filter(value => value.status === props.isFinish).sort(function (a, b) {
                // Sort Data
                return props.isFinish ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt);

            }).map((value, index) => {
                return (
                    <div key={index} style={{ padding: 5 }}>
                        <StyledDiv>
                            <li style={{ color: "#f22f2f2", textDecoration: props.isFinish ? "line-through #f0f0f0" : '' }}>{value.title}</li>
                            <div>
                                <AiFillInfoCircle
                                    style={StyledIcon} onClick={() => {
                                        props.showPopUp(value.id)
                                    }}
                                    color='blue'
                                />
                                <AiOutlineEdit
                                    style={StyledIcon} onClick={() => {
                                        props.updateTodoList(value.id)
                                    }}
                                />
                                {!props.isFinish &&
                                    <AiTwotoneDelete
                                        style={StyledIcon} onClick={() => {
                                            props.deleteTodoList(value.id)
                                        }} color='red'

                                    />
                                }
                            </div>
                        </StyledDiv>
                    </div>
                )
            })}
        </StyledUl>

    )
}

export default TodoList
