import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from "./pages/Article";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:classList/:name" element={<Article />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
