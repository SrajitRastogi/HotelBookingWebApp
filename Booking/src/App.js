import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotels from "./pages/hotels/Hotels";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotels/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
