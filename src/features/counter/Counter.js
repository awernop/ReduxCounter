import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, makeNull } from "./counterSlice";
import { Button } from "@mui/material";

import "./counter.css";

export const Counter = () =>{
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div className="main">
            <p>{count}</p>
            <div className="buttons">
                <button
                aria-label="Уменьшить значение"
                onClick={() => dispatch(decrement())}
                variant="contained"
                className="btn">
                    Уменьшить
                </button>
                <button
                aria-label="Обнулить значение"
                onClick={() => dispatch(makeNull())}
                variant="contained"
                className="btn2">
                    Обнулить
                </button>
                <button
                aria-label="Увеличить значение"
                onClick={() => dispatch(increment())}
                variant="contained"
                className="btn">
                    Увеличить
                </button>
            </div>
        </div>
    )
}