import React,{useEffect,useContext} from 'react'
import { GameStateContext } from './helpers/Contexts'

const Time = () => {

    const { second,setsecond } = useContext(GameStateContext);
 useEffect(() => {
    const interval = setInterval(()=>{
        setsecond(second=>second+10)
     },10)
     return()=>clearInterval(interval)
 },[])
    return (
        <div>
            
        </div>
    )
}

export default Time
