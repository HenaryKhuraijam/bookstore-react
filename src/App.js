import { HashRouter, Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import './index.css';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Book />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
