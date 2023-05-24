import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import IntDiff from './components/IntDiff';
import ExpertDiff from './components/ExpertDiff';
import BeginnerDiff from './components/beginnerDif';


function App() {
  const style = {
    display: "flex",
    justifyContent: "spaceAround",
    color: "lightgreen"
  }
  return (

    <>
      <div className="App">
        <Header />
        <nav>
          <button className='beginButton'>
            <NavLink to="/beginnerDif"  >Beginner Workouts</NavLink>
          </button>
          <button className='beginButton'>
            <NavLink to="/IntDiff">Intermediate Workouts</NavLink>
          </button>
          <button className='beginButton'>
            <NavLink to="/ExpertDiff">Expert Workouts</NavLink>
          </button>
        </nav>
      </div>

      <Routes>
        <Route path='/beginnerDif' element={<BeginnerDiff />} />
        <Route path='/IntDiff' element={<IntDiff />} />
        <Route path='/ExpertDiff' element={<ExpertDiff />} />
      </Routes>
    </>
  );
}

export default App;
