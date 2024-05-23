import { BrowserRouter , Route ,Routes } from "react-router-dom";
import Home from "./screens/home";
import Game from "./screens/game";

function App() {


  return (
    <>
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
       
        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App
