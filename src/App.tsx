import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "@assets/styles/global.css";
import Home from "@pages/Home/Home";
import Header from "@components/organisms/Header/Header";
import { AuthProvider } from "@utils/context/authProvider";
import { UserProvider } from "@utils/context/userProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
