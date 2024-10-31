import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/homePage";
import { Contacts } from "./pages/contacts/contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route
        path="/success"
        element={<h1>Оплата…</h1>}
      ></Route>
    </Routes>
  );
}

export default App;
