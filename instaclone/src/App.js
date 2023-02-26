import {BrowserRouter,Routes,Route} from "react-router-dom"
import LandingPage from "./components/landingpage/landingpage";
import Postview from "./components/postviewpage/postview";
import Postform from "./components/postform/postform";
import PostHandlingProvider from "./components/contextprovider/PostHandlingProvider";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <PostHandlingProvider>
    <Routes>
     
      <Route path="/" element={<LandingPage/>}/>
      <Route path="postview_page" element={<Postview/>}/>
      <Route path="postform_page" element={<Postform/>}/>
     
      
    </Routes>
    </PostHandlingProvider>
    </BrowserRouter>
      
    
    </div>
  );
}

export default App;
