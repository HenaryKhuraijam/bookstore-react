import { HashRouter, Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import './index.css';

const App = () => (
  <HashRouter>
    <Routes>
      <Route index element={<Book />} />
    </Routes>
  </HashRouter>
);

export default App;
