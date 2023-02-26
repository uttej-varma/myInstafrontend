import Topbar from "../topbar/topbar"
import "./postform.css";
import PostHandlingContext from "../../Context";
// import {ArrowBack} from "@mui/icons-material"

import {useRef,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { useLocation } from 'react-router-dom';


import axios from "axios";
const Postform=()=>{
    
    // const url=useLocation();

   const navigate=useNavigate();
    const [file,setFile]=useState("");
    // const [urlimage,seturlImage]=useState("");
    const postContext=useContext(PostHandlingContext)
   const author=useRef();
   const location=useRef();
   const description=useRef();
   
//    useEffect(()=>{
//     console.log("useeffectworking");
//    },[url.pathname])
  
  
   const submitHandler=(e)=>{
      e.preventDefault();
      if(file&&author.current.value&&location.current.value&&description.current.value)
       { const data=new FormData();
        const fileName=file.name;
        data.append("presentImage",file);
        data.append("fileName",fileName);
        data.append("name",author.current.value);
        data.append("location",location.current.value);
        data.append("description",description.current.value);
        axios.post("https://instauttej.onrender.com/upload",data).then((res)=>{console.log("success")}).catch((err)=>{console.log("failed")});
        postContext.value===true?postContext.setValue(false):postContext.setValue(true);
        alert("posted successfully");

        navigate("/postview_page")
      }
      else{
        alert("all fields are manidatory");
      }
      
      
   }
    
    return(
        <>
           <Topbar/>
           <div className="postpagemaincontainer">
               <form className="postform" metho="post">
                <div className="formfileinput">
                     <input type="file" accept=".png" onChange={(e) => {setFile(e.target.files[0])}} required/>
                </div>
                <div className="formauthorandlocation">
                     <div className="formelement">
                          <input type="text" placeholder="Author" ref={author} required />
                     </div>
                     <div className="formelement">
                     <input type="text" placeholder="location"  ref={location} required/>
                    </div>
                </div>
                <div className="formelement">
                          <input type="text" placeholder="description" ref={description} className="formdescription" required/>
                </div>
                <div>
                    <input type="submit" value="post" className="postbutton" onClick={submitHandler}/>
                    {/* <button className="postbutton" onClick={()=>{ navigate("/postview_page")} }><ArrowBack/></button> */}
                </div>
                {/* <div>
                    <button onClick={()=>{ navigate("/postview_page")}}>cvheck</button>
                </div> */}
               </form>
           </div>
        </>
    )
}

export default Postform;