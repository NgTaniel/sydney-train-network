import React from 'react';
import './App.css';
import Navbar from './components/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import CityCircle from './pages/citycircle';
import Central from './pages/central'
import T1 from './pages/t1';
import T2 from './pages/t2';
import T3 from './pages/t3';
import T4 from './pages/t4';
import T5 from './pages/t5';
import T6 from './pages/t6';
import T7 from './pages/t7';
import T8 from './pages/t8';
import T9 from './pages/t9';
  
function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<About/>} />
            <Route path='/citycircle' element={<CityCircle/>}/>
            <Route path='/central' element={<Central/>}/>
            <Route path='/t1' element={<T1/>} />
            <Route path='/t2' element={<T2/>} />
            <Route path='/t3' element={<T3/>} />
            <Route path='/t4' element={<T4/>} />
            <Route path='/t5' element={<T5/>} />
            <Route path='/t6' element={<T6/>} />
            <Route path='/t7' element={<T7/>} />
            <Route path='/t8' element={<T8/>} />
            <Route path='/t9' element={<T9/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
