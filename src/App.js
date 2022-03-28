import './App.css';
import Header from './component/Header/Header';
import Qustion from './component/Qustions/Qustion';
import Shop from './component/Shop/Shop';

function App() {
  return(
    <div className='app' >
      <Header></Header>
      <Shop></Shop>
      <Qustion></Qustion>
    </div>
  )
}

export default App;
