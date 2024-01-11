import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Appointments } from "./pages/Appointments";
import { NewAppointment } from "./pages/NewAppointment";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout/>} >     
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Appointments/:slug" element={<Appointments/>} />
          <Route path="/NewAppointment/:slug" element={<NewAppointment/>} />
        </Route>
    </Routes> 
  )
}