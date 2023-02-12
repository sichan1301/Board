import {useState} from "react";
import { useLocation, useParams } from "react-router-dom";

const DataItem = ({id,name,title,content,category,created_date,onDelete,onUpdate}) =>{

  // const dataId = useParams();
  // console.log(dataId.id)

  // const location = useLocation()
  // console.log(location)

  const [currentInfo,setCurrentInfo] = useState({
    id:id,
    created_date:created_date,
    name:name,
    title:title,
    content:content,
    category:category,
  })

  const [isEdit,setIsEdit] = useState(false)

  const handleChange = (e) =>{
    setCurrentInfo({
      ...currentInfo,
      [e.target.name]:e.target.value
    })
  }

  const handleCancel = () =>{
    setCurrentInfo({
      id:id,
      name:name,
      title:title,
      content:content,
      category:category,
    })
    setIsEdit(!isEdit)
  }
  
  const handleUpdate = () =>{
    onUpdate(currentInfo)
    setIsEdit(!isEdit)
  }
  const handleDelete = () =>{
    onDelete(id)
  }

  return (
    <>
      {isEdit
        ?
        
        <div className = "Item">
          <select name="category" value = {currentInfo.category} onChange = {(e)=>{handleChange(e)}}>
            <option value="가">가</option>
            <option value="나">나</option>
            <option value="다">다</option>
          </select><br />
          <input name = "name" value = {currentInfo.name} onChange={(e)=>{handleChange(e)}}/>
          <p className ="Item_created_date">{new Date(created_date).toLocaleString()}</p>
          <input name="title" value = {currentInfo.title} onChange = {(e)=>{handleChange(e)}} />
          <textarea className ="Item_textarea" name = "content" value = {currentInfo.content} onChange={(e)=>{handleChange(e)}}></textarea>
          <button onClick = {handleCancel}>취소</button>
          <button onClick = {handleUpdate}>수정</button>
        </div>
        :
        <div className = "Item">
          <p className ="Item_name">{category}</p>
          <p className ="Item_name">{name}</p>
          <p className ="Item_created_date">{new Date(created_date).toLocaleString()}</p>
          <p className ="Item_title">{title}</p>
          <p className ="Item_content">{content}</p>
          <button onClick = {handleDelete}>삭제</button>
          <button onClick = {()=>{setIsEdit(!isEdit)}}>수정</button>
        </div>
      }

    </>

  )
}

export default DataItem
