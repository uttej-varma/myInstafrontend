import "./landingpage.css"
import { useNavigate } from "react-router-dom";
const LandingPage=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
        navigate("/postview_page")
    }
   return(
   <>
    <div className="LandingContainer">
        <div className="landingPhotocontainer">
            <img  className="landingPhoto" src="landingphoto/lens-1418954.png" alt="landingpagepicture"/>
        </div>
        <div className="landingtextcontainer">
            <div className="landingpagetext">10X Team 04</div>
            <div><button className="landingpagebutton" onClick={clickHandler}>Enter</button></div>

        </div>

    </div>
   </>
   )
}
export default LandingPage;