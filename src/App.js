// import './App.css';
import AppRoute from './components/AppRoute'
import AppNav from './components/AppNav'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AppNav></AppNav>
      <AppRoute></AppRoute>
    </BrowserRouter>  
  );
}

export default App;

