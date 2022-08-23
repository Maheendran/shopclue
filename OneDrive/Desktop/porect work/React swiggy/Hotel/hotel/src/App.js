
import './App.css';
import { Categoery } from './components/Categoery';
import { Pages } from './page/Pages';
import{BrowserRouter, Link} from 'react-router-dom'
import Search from './page/Search';
import { Searching } from './page/Searching';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<div>
<Link to='/'>
  <img style={
    {width:"150px"}
  } src='https://logodix.com/logo/2178221.png'/>
</Link>
</div>

<Searching/>
   <Categoery/>
    <Pages/>
</BrowserRouter>
    
    </div>
  );
}

export default App;
