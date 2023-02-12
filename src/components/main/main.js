import Category from "./category";
import New from "./new";
import DataList from "./dataList";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

const Main = () => {

  const [currentCategory,setCurrentCategory] = useState("전체")

  console.log(currentCategory)
  const [data, setData] = useState([])

  const onCreate = (info) => {
    const newData = {
      ...info,
      id:uuidv4(),
      created_date:new Date().getTime()
    }
    setData([...data,newData])
  }

  const onDelete = (targetId) =>{
    const newData = data.filter((item)=>(item.id !== targetId))
    setData(newData);
  }

  const onUpdate = (targetData) =>{
    const newData = data.map((item)=>item.id === targetData.id ? targetData : item)
    setData(newData)
  }

    return (
      <>
        <New onCreate ={onCreate}/>
        <Category setCurrentCategory={setCurrentCategory} />
        <DataList data={data} onDelete={onDelete} onUpdate ={onUpdate} currentCategory={currentCategory}/> <br />
        {/*<Link to={"/new"} state={{onCreate:onCreate}}>글쓰기</Link>*/}
      </>
    )
  }


export default Main
