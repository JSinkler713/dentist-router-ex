import './App.css';
import tooth from './tooth.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
import Procedure from './components/Procedure'

function App() {
  return (
    <Router>
      <nav className='nav'>
        <div class='logo'>
          <Link to='/'>
            <img src={tooth} style={{width:'50px'}} />
          </Link>
        </div>
        <div class='links'>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/procedures'>Procedures</Link>
          <Link to='/procedures/root-canal'>Root Canal</Link>
        </div>
      </nav>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/procedures' component={Procedures} />
        <Route path='/procedures/:name' render={(props)=> <Procedure {...props}/>} />
      </div>
    </Router>
  );
}

export default App;
