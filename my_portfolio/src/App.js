import './SCSS/_app.scss';
 import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer"; 
function App() {
  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
