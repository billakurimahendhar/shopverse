import AuthLayout from "./components/authentication/layout";
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header component</h1>
      <Routes>
         <Route path="/authentication" element={<AuthLayout/>}>
         <Route path="login" element={<login/>}></Route>
         <Route path="register" element={<register/>}></Route>
         </Route>
      </Routes>

    </div>
    
  );
}

export default App
