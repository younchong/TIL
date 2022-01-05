import './app.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './components/login/login';

function App() {
  return (
    <section>
      <Header />
      <section>
        <ul>
          <Login name="Google" />
          <Login name="Email" />
        </ul>
      </section>
      <Footer/>
    </section>
  );
}

export default App;
