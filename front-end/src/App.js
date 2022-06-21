import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import GlobalStyle from './style/global'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Toaster position='top-right' reverseOrder={true} toastOptions={{ duration: 5000 }} />
    </>
  );
}

export default App;
