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

        <nav className='threeButtons'>

          <div className='buttonSection' >
            <button className='firstButton'>
              <NavLink to="/beginnerDif"  >Beginner Workouts</NavLink>
            </button>
         
            <button className='secondButton'>
              <NavLink to="/IntDiff">Intermediate Workouts</NavLink>
            </button>
         
            <button className='thirdButton'>
              <NavLink to="/ExpertDiff">Expert Workouts</NavLink>
            </button>
          </div>
        </nav>
        <section className='contactSection' >
          <h6>About-Us </h6>
          <h6>Contact</h6>
          <h6>F.A.Q</h6> 
        </section>
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
