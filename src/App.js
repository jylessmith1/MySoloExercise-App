import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import IntDiff from './components/IntDiff';
import ExpertDiff from './components/ExpertDiff';
// import MyFetch from './components/MyFetch';



function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path='/beginnerDif' element={<beginnerDiff />} />
        <Route path='/IntDiff' element={<IntDiff />} />
        <Route path='/ExpertDiff' element={<ExpertDiff />} />
      </Routes>
    </>
  );
}

export default App;
