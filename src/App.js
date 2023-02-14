
import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import New from './components/new/new';
import Main from './components/main/main';
import DataItem from './components/detail/dataItem';
import {useState} from "react";

function App() {
  const navigate = useNavigate()
  const [data,setData] = useState([])
  const [isNew, setIsNew] = useState(true);
  const onCreate = (info) =>{
    const newData = {
      id:uuidv4(),
      created_date:new Date().getTime(),
      ...info
    }
    setData([newData,...data])
  }

  const onDelete = (targetId) => {
    const newData = data.filter((item)=>(item.id !== targetId))
    setData(newData);
  }

  const onUpdate = (targetData) => {
    const newData = data.map((item)=>item.id === targetData.id ? targetData : item)
    setData(newData)
  }

  const onNewClick = () =>{
    setIsNew(false)
    navigate("new")
  }


  return (

    <div className="App">

      <Routes>
        <Route path ="/" element={<Main data={data} setData={setData} />} />
        <Route path="/new" element={<New onCreate={onCreate} setIsNew ={setIsNew} />} />
        <Route path="/data/:id" element={<DataItem data = {data} onDelete={onDelete} onUpdate={onUpdate} />} />
      </Routes >

      {
        isNew ? <p className ="isNew" onClick = {onNewClick}>게시글쓰기</p> : null
      }
    </div >
  )
}

export default App;
