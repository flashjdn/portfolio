import "./App.css";
import "./components/Navbar/Navbar.css";
import Navbar from "./components/Navbar";
import ImageBox from "./components/ImageBox";
import Profile from "./components/Profile";
import Projects from "./components/Projects"


function App() {
  return (
    <main>
      <Navbar></Navbar>
      <ImageBox></ImageBox>
      <Profile />
      <Projects />
    </main>
  );
}

export default App;
