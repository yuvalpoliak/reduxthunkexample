import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import postSlice, { getPost } from "./redux/postSlice";

export default function Posts(){
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(getPost())}, [dispatch])

    return(
        <div>
            <button onClick={dispatch(postSlice)}>see infinite amount of data from a random website</button>
        </div>
    );
}