import {Routes, Route, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import Session from "../pages/Session"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import LoadingRoutes from "../components/loading"
import ModalCreateContact from "../components/modals/createContact"
import ModalUpdateContact from "../components/modals/updateContact"
import ModalUpdateAddressContact from "../components/modals/updateAddressContact"
import ModalUpdateUser from "../components/modals/updateUser"
import ModalUpdateImageUser from "../components/modals/updateImageUser"


const RoutesMain = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/session" element={<Session />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />}>
            <Route path="addContact" element={<ModalCreateContact />}/>
            <Route path="updateContact/:contactId" element={<ModalUpdateContact/>}/>
            <Route path="updateAddressContact/:contactId" element={<ModalUpdateAddressContact/>}/>
            <Route path="updateUser/:userId" element={<ModalUpdateUser/>}/>
            <Route path="updateImageUser/:userId" element={<ModalUpdateImageUser/>}/>
        </Route>

        <Route path="*" element={<Navigate to="home"/>} />
    </Routes>
)

export default RoutesMain