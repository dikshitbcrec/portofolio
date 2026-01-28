import { Experiences } from "./component/Experiences";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Projects } from "./component/Projects";
import { Skills } from "./component/Skills";

function App() {
  return (
    <div className="min-h-screen bg-yellow-200">
      <Header/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
