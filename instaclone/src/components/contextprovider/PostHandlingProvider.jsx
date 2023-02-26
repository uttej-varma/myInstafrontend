import PostHandlingContext from "../../Context";
import { useState } from "react";
const PostHandlingProvider=(props)=>{
    const [boolean,setBoolean]=useState(true);
   return(
    <>
     <PostHandlingContext.Provider value={{value:boolean,setValue:setBoolean}}>
     {props.children}
       </PostHandlingContext.Provider>
    </>
   )
}

export default PostHandlingProvider;