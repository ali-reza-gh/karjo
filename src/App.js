import { Route, Routes, Navigate } from "react-router-dom";

//components
import Register from "./component/form/register/Register";
import Login from "./component/form/login/Login"
import Main from "./component/main/Main";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-blue-900 to-purple-900 grid place-content-center">

        <Routes>
          <Route path="/*" element={<Navigate to="/register" />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/main" element={<Main />} />
        </Routes>

      </div>

    </>
  );
}

export default App;
