import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="bg-green-500 h-screen flex flex-col">
      <header className="bg-red-500">
        <Navbar />
      </header>
      <main className="flex-grow">
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
