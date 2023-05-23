import React from 'react';
import Difficulty from './Difficulty';


const Header = () => {
  return (
    <>

      <header className="App-header">
        <article>

          <h1>🦾ShapeShifters🦾</h1>
          <br />
          <br />
          <p>
            Welcome to ShapeShifters, where a vibrant community awaits to celebrate your unique fitness odyssey. Whether you're taking your first steps towards fitness or you're already a seasoned workout aficionado, we're here to support and uplift you every step of the way. Embrace the power within and prepare to embark on a path of positive change. Select an option below and let the metamorphosis begin. ShapeShifters is here to guide you toward your extraordinary self.
          </p>
        </article>

        <Difficulty />
          <br />
          <br />
      </header>
    </>
  );
};

export default Header;