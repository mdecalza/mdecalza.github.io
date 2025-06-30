/* Matthew DeCalzadilla 2024—2025 */
/* Mouse handling referenced from https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/ */

import { HashRouter as Router, Route, Routes } from 'react-router';
import { useState } from 'react';

/* components */
import Navbar from '/src/components/Navbar/Navbar';
import Page from '/src/components/Page/Page';

/* functions */
import { collapseButtonContainer } from '/src/functions/collapseButtonContainer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = (e) => {
    e.preventDefault();
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  const handleMouseClick = () => {
    const elem = document.querySelector('.Navbar');
    const boundingBox = elem.getBoundingClientRect();

    const isMouseInNavbar =
         mousePosition.x >= boundingBox.left
      && mousePosition.x <  boundingBox.right
      && mousePosition.y >= boundingBox.top
      && mousePosition.y <  boundingBox.bottom;

    if (!isMouseInNavbar) {
      collapseButtonContainer(true);
    }
  }

  return (
    <div
    onMouseMove={ handleMouseMove }
    onPointerDown={ handleMouseClick }>
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
    </div>
  );
}