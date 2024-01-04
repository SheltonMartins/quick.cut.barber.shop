import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/Default";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Appointments } from "./pages/Appointments";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout/>} >     
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Appointments/:slug" element={<Appointments/>} />
        </Route>
    </Routes>
  )
}