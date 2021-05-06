import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <Routes />
    </>
  );
}

export default App;
