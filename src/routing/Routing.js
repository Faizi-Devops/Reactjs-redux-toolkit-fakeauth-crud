import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import SignIn from '../signIn';
import SignUp from '../signUp';
import Student from '../Student';

export default function Routing() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route exact path="/"  />
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/Student" element={<Student/>}/>
      </Routes>
    </Router>
  );
}