/* Code by 2024—2025 Matthew DeCalzadilla */

import { HashRouter as Router, Route, Routes } from 'react-router';

/* components */
import Navbar from '/src/components/Navbar/Navbar';
import Page from '/src/components/Page/Page';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Page pageType='home' /> } />
          <Route path='/websites' element={ <Page pageType='websites' /> } />
          <Route path='/wads' element={ <Page pageType='wads' /> } />
          <Route path='/art' element={ <Page pageType='art' /> } />
          <Route path='/music' element={ <Page pageType='music' /> } />
        </Routes>
      </Router>
    </>
  );
}