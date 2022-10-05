import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header
        branding="Contact Manager"
      />
      <div className="container">
        <Contact
          name="Madushan"
          email="madushan@gmail.com"
          phone="+94718895181"
        />

        <Contact
          name="Nipuna"
          email="nipuna@gmail.com"
          phone="+94717795181"
        />
      </div>


    </div>
  );
}

export default App;
