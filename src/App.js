import {Route , Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import HomePage from './components/RouterPages/HomePage';
import AboutPage from './components/RouterPages/AboutPage';

function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/"  element={<HomePage/>} >
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/Project' element={<ProjectPage/>}/>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
