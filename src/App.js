import './App.css';
import Header from './component/Header/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import OrderReview from './component/OrderReview/OrderReview';
import Home from './component/Home/Home';
import GFother from './component/GFother/GFother';

function App() {
  return (
    <div className="App">
      <h1> Wellcome to Phone Mania!!</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={< Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
        <Route path='/gfother' element={<GFother></GFother>}></Route>
      </Routes>
    </div>
  );
}

export default App;
