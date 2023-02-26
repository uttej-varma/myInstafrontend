import {MoreHoriz,Favorite,Send} from "@mui/icons-material"
import { useState } from "react"
import "./postlist.css"
const PostList=(props)=>{
    const [like,setlikes]=useState(props.user.likes);
    const [likestatus,setlikestatus]=useState({liked:false,color:"black"});
    const clickHandler=()=>{
        if(likestatus.liked===false)
        {
            setlikes(like+1);
            setlikestatus({liked:true,color:"red"});
        }
        else{
            setlikes(like-1);
            setlikestatus({liked:false,color:"black"});
        }
    }
    const base64string=btoa(
        String.fromCharCode(...new Uint8Array((props.user.image.data.data)))
    )
    return(
        <>
        <div className="centerbarmaincontainer">
          <div className="centerbarposttop">
              <div className="centerbartopleft">
                  <div className="userName">{props.user.name} </div>
                  <div className="userlocation">{props.user.location}</div>
              </div>
              <div className="centerbartopright">
                 <MoreHoriz/>
              </div>
          </div>
          <div className="centerbarpostmiddle">
              <img  className="centerbarpostimage" src={`data:image/png;base64,${base64string}`} alt="post"/>
          </div>
          <div className="centerbarpostbottom">
              <div className="centerbarpostbottomtopcontainer">
              <div className="centerbarpostbottomtop">
                  <Favorite className="heartemoji" onClick={clickHandler} htmlColor={likestatus.color}/>
                  <Send className="sendemoji"/>
              </div>
              <div className="userDate">
                    {props.user.createdAt}
              </div>
              </div>
              <div className="userLikes">{like} likes</div>
              <div className="userDescription">{props.user.description}</div>
              
          </div>

        </div>
      </>
    )
}
export default PostList;
