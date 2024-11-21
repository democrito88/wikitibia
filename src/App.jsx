import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from "./pages/Article";
import Nav from "./components/Nav";
import CategoryPage from './pages/CategoryPage';
import News from './pages/News';

function App() {
  return (
    <>
      <div className='fundo'>
      </div>
      <BrowserRouter>
        <main className='container'>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:classList/:name" element={<Article />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/news/id/:id" element={<News />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <footer className='footer'>
          <h6>Wikitibia  - 2024</h6>
        </footer>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
