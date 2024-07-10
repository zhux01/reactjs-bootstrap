import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/about.jsx'
import Contact from './Pages/contact.jsx'
import Perbaikan from './Pages/Perbaikan.jsx'
import Login from './Pages/Login.jsx'
import Update from './Pages/UpdateUser.jsx'
import DeleteUser from './Pages/DeleteUser.jsx'
import Register from './Pages/Register.jsx'
const App = () => {
    return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/update/:id" element={<Update />} />
    <Route path="/delete/:id" element={<DeleteUser />} />
    <Route path="/perbaikan" element={<Perbaikan />} />
    </Routes>
    </Router>
    )
}
export default App