import {CameraAlt} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import "./topbar.css"
const Topbar=()=>{
    const navigate=useNavigate()
    const clickHandler=()=>{
        navigate("/postform_page");
    }
    return(
        <>
        <div className="topbarContainer">
            <div className="topbarlogoContainer">
                <div className="topbarlogo">
                     <img className="topbarlogoimg" src="/landingphoto/icon.jpg" alt="logo"/>
                </div>
                <div className="topbarappname">
                    Instaclone
                </div>
             </div>
             <div className="topbarcameracontainer">
                <CameraAlt className="topbarcamera" onClick={clickHandler}/>
             </div>

        </div>
        <hr className="topbarhorizontalruler"></hr>
        </>
    )
}
export default Topbar;