import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import DataItem from "./dataItem";

const DataList = ({data,currentCategory,onDelete,onUpdate}) =>{

  // const navigate = useNavigate()
  console.log(currentCategory);

  const filterData = (data,currentCategory) =>{
    if(currentCategory === "전체"){
      return data
    }
    return data.filter(item => item.category === currentCategory)
  }

  const filteredData = filterData(data,currentCategory);
  
  return(
    <div className = "List">
      {
        filteredData.map((item)=>(
          <DataItem key = {item.id} {...item} onDelete = {onDelete} onUpdate ={onUpdate}/>
          // <p onClick = {()=>navigate(`/data/${item.id}`, {state : {data:filteredData,onDelete:onDelete,onUpdate:onUpdate}})}>{item.title}</p>
        ))
      }
    </div>
  )

}


export default DataList
