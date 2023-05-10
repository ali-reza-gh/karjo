import { Route, Routes, Navigate } from "react-router-dom";

//components
import Register from "./component/form/register/Register";
import Login from "./component/form/login/Login"


function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-blue-900 to-purple-900 grid place-content-center">

        <Routes>
          <Route path="/*" element={<Navigate to="/register" />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>

      </div>

    </>
  );
}

export default App;
