
import './App.css';
import {Routes,Route} from "react-router-dom";
import New from './components/main/new';
import Main from './components/main/main';
import DataItem from './components/main/dataItem';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Main />} />
        <Route path="/new" element={<New />} />
        <Route path="/data/:id" element={<DataItem />} />
      </Routes >
    </div >
  )
}

export default App;
