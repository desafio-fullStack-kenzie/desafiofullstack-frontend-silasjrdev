import {Routes, Route, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import Session from "../pages/Session"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import LoadingRoutes from "../components/loading"


const RoutesMain = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/session" element={<Session />} />
        <Route path="/register" element={<Register />} />
        <Route element={<LoadingRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="home"/>} />
    </Routes>
)

export default RoutesMain