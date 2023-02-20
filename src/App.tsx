
import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import New from './components/new/new';
import Main from './components/main/main';
import DataItem from './components/detail/dataItem';
import {useState} from "react";

export interface IData{
  id:string,
  created_date:number,
  name:string,
  title:string,
  content:string,
  category:string
}

const App = () => {
  const navigate = useNavigate()
  const [data,setData] = useState<IData[]>([])
  const [isNew, setIsNew] = useState<boolean>(true);
  
  const onCreate = (info:IData)=>{
    setData([info,...data])
    setIsNew(true)
  }

  const onDelete = (targetId:string) => {
    const newData = data.filter((item)=>(item.id !== targetId))
    setData(newData);
  }

  const onUpdate = (targetData:IData) => {
    const newData = data.map((item)=>item.id === targetData.id ? targetData : item)
    setData(newData)
  }

  const onNewClick = () =>{
    setIsNew(false)
    navigate("/new")
  }


  return (

    <div className="App">

      <Routes>
        <Route path ="/" element={<Main data={data} />} />
        <Route path="/new" element={<New onCreate={onCreate} />} />
        <Route path="/data/:id" element={<DataItem data = {data} onDelete={onDelete} onUpdate={onUpdate} />} />
      </Routes >

      {
        isNew ? <p className ="isNew" onClick = {onNewClick}>게시글쓰기</p> : null
      }
    </div >
  )
}

export default App;
