import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-red-500">
        <Navbar />
      </header>
      <main className="flex-grow">
        <ToastContainer position="bottom-center" limit={1} />
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
