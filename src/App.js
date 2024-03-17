
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home"

import TeamClickk from './pages/TeamClickk'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/TeamClickk" element={<TeamClickk/>}/>

    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
