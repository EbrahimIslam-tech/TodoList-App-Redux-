import React, { useState } from 'react';
import "./Todo.css"
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from './../actions/index';

const Todo = () => {

    const [inputData, setInputData] = useState('')
    const list = useSelector((state) => state.todoReducers.list)
    //  console.log(inputData);
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        {/* <img src={todo} alt="todoLogo" /> */}
                        <figcaption>Add your list here ✌ </figcaption>

                    </figure>
                    <div className="addItems">
                        <input type="text" className="form-control" placeholder="✍️ Add item..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}

                        />
                        <i className="fa fa-plus add-btn" title="Add item"
                            onClick={() => dispatch(addTodo(inputData), setInputData(''))}
                        ></i>

                    </div>
                    <div className='showItems'>
                        {
                            list.map((elm) => {
                                return (
                                    <div className='eachItem' key={elm.id}>
                                        <h3>
                                            {elm.data}
                                        </h3>
                                        <div className='todo-btn'>
                                            <i className="far fa-trash-alt add-btn" title="delete item"
                                                onClick={() => dispatch(deleteTodo(elm.id))}
                                            ></i>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>
                    <div className='showItems'>
                        <button className=' btn effect04' data-sm-link-text="remove all"
                            onClick={() => dispatch(removeTodo())}
                        >
                            <span>Check List</span>

                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;