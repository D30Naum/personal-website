import "./App.css";
import { Languages, Topnav, Timeline } from "./components/index";
import { Header, Footer } from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="main-info">
      <Topnav/>
      <Header/>
      <Languages/>
      <Timeline/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
