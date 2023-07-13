import React,{useState} from "react";
import Sqaure from "./Square"
const Board=()=>{
    const arr=Array(9);
    const [state,setState]=useState(arr);
    const [xTurn,setXTurn]=useState(true);

    const handleClick=(index)=>{
        const copyState=[...state];
        copyState[index]=xTurn?'X':'O'
        setState(copyState);
        setXTurn(!xTurn);
    }

    const winnerLogic=()=>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [0,3,6],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winner){
            const [a,b,c]=logic;
            if(state[a]!=null && state[a]===state[b]&&state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    }
    const isWinner=winnerLogic();
    const reset=()=>{
        setState(Array(9).fill(null));
    }
    return(
    <div className="Board-container">
        <h1>Tic Tac Toe</h1>
        {winnerLogic()?<><h1>{isWinner} won</h1><button onClick={reset}>Play again</button></>:
        <>
        <h4>player {xTurn?'X':'O'} move</h4>
        <div className="Board-row">
        <Sqaure value={state[0]} onClick={()=>{handleClick(0)}}/>
        <Sqaure value={state[1]} onClick={()=>{handleClick(1)}}/>
        <Sqaure value={state[2]} onClick={()=>{handleClick(2)}}/>
        </div>
        <div className="Board-row">
        <Sqaure value={state[3]} onClick={()=>{handleClick(3)}}/>
        <Sqaure value={state[4]} onClick={()=>{handleClick(4)}}/>
        <Sqaure value={state[5]} onClick={()=>{handleClick(5)}}/>
        </div>
        <div className="Board-row">
        <Sqaure value={state[6]} onClick={()=>{handleClick(6)}}/>
        <Sqaure value={state[7]} onClick={()=>{handleClick(7)}}/>
        <Sqaure value={state[8]} onClick={()=>{handleClick(8)}}/>
        </div>
        </>}
    </div>
    );
}
export default Board;