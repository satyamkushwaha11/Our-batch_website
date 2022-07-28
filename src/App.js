import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import publicRoutes from "./routes/public_routes";
import Layout from "./layout";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map(({ component: Cmpt, ...route }, index) => (
            <Route key={"publicRoutes" + index} {...route} element={<Cmpt />} />
          ))}
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
