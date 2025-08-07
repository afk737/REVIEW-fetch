import { useEffect } from "react";
import { Fetching } from "./FetchSlice";
import {useDispatch,useSelector} from 'react-redux'
import Cliploader from 'react-spinners/Cliploader'


const Fetch=()=>{
    const dispatch=useDispatch();
    const { users,loading,error}=useSelector((state)=>state.users)

   useEffect(()=>{
    dispatch(Fetching()

    ,[dispatch])
   })
   if(loading){
    <p>
        <Cliploader color="red" size={50}/>
        <p>loading......</p>
    </p>
   }
  
   console.log() 


   return(
    <>
    <h1>users</h1>

    <ul>
        {users.map((user)=>(
            <li key={user.id}>
               {user.firstName}
            </li>
        ))}
    </ul>
    
    </>
   )

}

export default Fetch;