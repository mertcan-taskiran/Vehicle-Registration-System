import './App.css';
import AppContent from './contents/AppContent';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppContent />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                pauseOnHover={true} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;