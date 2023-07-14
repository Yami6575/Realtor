import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home"; 
import Profile  from "./pages/Profile";
import SignIn from "./pages/SignIn"; 
import SignUp from "./pages/SignUp"; 
import ForgotPassword from "./pages/ForgotPassword"; 
import Offers from "./pages/Offers"; 
import Header from "./components/header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
   
      <Router>
        <Header/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>

        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
