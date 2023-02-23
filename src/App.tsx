
import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import New from './components/new/new';
import Main from './components/main/main';
import DataItem from './components/detail/dataItem';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {
  const navigate = useNavigate()
  const isCreate = useSelector((state:RootState)=>state.isCreate.isCreate)

  const onNewClick = () =>{
    navigate("/new")
  }

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Main />} />
        <Route path="/new" element={<New />} />
        <Route path="/data/:id" element={<DataItem />} />
      </Routes >
      {
        isCreate ? <p className ="isNew" onClick = {onNewClick}>게시글쓰기</p> : null
      }
    </div >
  )
}

export default App;