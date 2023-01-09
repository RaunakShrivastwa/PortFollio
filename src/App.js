import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Project from './components/Project/Project'
import Skill from './components/Skill/Skill'
import ProjectList from './components/ProjectList/ProjectList'
import NavBoot from './components/NavBoot/NavBoot';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>

      <Router>
       
        
        
        <NavBoot/>
        <Routes>
        
            <Route exact path='/' element={<Home/>}>Home</Route>
           <Route exact path='/about' element={<About/>}>About</Route>
           <Route exact path='/skill' element={<Skill/>}>Skill</Route>
           <Route exact path='/education' element={<Project/>}>Project</Route>
           <Route exact path='/work' element={<ProjectList/>}>ProjectList</Route>
        
           <Route exact path='/contact' element={<Contact/>}>Contact</Route>

        </Routes>
      </Router>

    </>
  )
}

export default App