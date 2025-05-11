import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ContactFrom from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Navbar />
      <nav>
        <Link to="/todo">Todo</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/contact" element={<ContactFrom />} />
      </Routes>
    </Router>
  );
}
export default App;
