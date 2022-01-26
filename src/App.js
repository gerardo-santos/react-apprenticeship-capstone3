import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
