import PostList from "../posts/postlist";
import "./centerbar.css";
import {useContext } from "react";
import PostHandlingContext from "../../Context";
// import {feeddata} from "../../data";
import {useState,useEffect} from  "react";
import axios from "axios";


const Centerbar=()=>{
   
   
    const [data,setData]=useState([]);
    const centerBar=useContext(PostHandlingContext);
   
    useEffect(()=>{
        axios.get("https://instauttej.onrender.com/upload").then((res)=>{setData(res.data)}).catch((e)=>{console.log(e.message)});
    },[centerBar.value])
    
    return(
       <>
       {/* <button className="postLoadingButton" onClick={postclickHandler}>LoadMore</button> */}
       <div className="centerbarallpostscontainer">
        {
            data.reverse().map((values,index)=>{
                // const base64string=btoa(
                //     String.fromCharCode(...new Uint8Array((values.image.data.data)))
                // )
                return(<PostList key={index} user={values}/>)
            })
        }
               
       </div>
       </>
          
    )
}
export default Centerbar;