import 'bootstrap/dist/css/bootstrap.min.css';
import Apropos from './component/apropos';
import Home from './component/home';
import ListeDepartement from './component/listdepartement';
import { BrowserRouter as Router,Route,Link,Routes}from 'react-router-dom'
function App() {
  return (
<div >
<Router>
<nav>
<ul>
<li><Link to="/home">Home</Link> </li>
<li><Link to="/apropos">About</Link></li>
<li><Link to="/listdepartement">List of departements</Link></li>
</ul>
</nav>
<div>
<Routes>
<Route path='/home' element={<Home/>}></Route>
<Route path='/apropos' element={<Apropos/>}></Route>
<Route path='/listdepartement' element={<ListeDepartement/>}></Route>
</Routes>
</div>
</Router>
</div>
  );
}

export default App;
