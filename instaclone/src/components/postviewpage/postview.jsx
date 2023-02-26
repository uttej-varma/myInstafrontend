import Topbar from "../topbar/topbar";
import Centerbar from "../centerbar/centerbar";
import { useLocation } from 'react-router-dom';
import "./postview.css"
const Postview=()=>{
    const location = useLocation();
    console.log(location.pathname);
    return(
        <>
       <Topbar/>
       <div className="maincenterbarcontainer">
          <Centerbar className="centerbar" url={location.pathname}/>
       </div>
        </>
    )
}
export default Postview;