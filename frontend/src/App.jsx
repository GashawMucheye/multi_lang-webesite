import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full fixed bg-gray-300 shadow-sm z-50">
        <Navbar />
      </header>
      <main className="flex-grow w-full ">
        <ToastContainer position="bottom-center" limit={1} />
        <Main />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
