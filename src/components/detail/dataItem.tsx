import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {IData} from "../../store/board";
import { DELETE,UPDATE } from "../../store/board";
import { RootState } from "../../store/store";

const DataItem = () =>{
  const posts = useSelector((state:RootState)=>state.board).posts
  const dispatch = useDispatch();
  
  const [isEdit,setIsEdit] = useState(false)

  const paramsId = useParams().id;
  const navigate = useNavigate();

  const filteredData:IData[] = posts.filter((item:IData) => item.id === paramsId)

  const [currentInfo,setCurrentInfo] = useState({
    id:filteredData[0].id,
    created_date:filteredData[0].created_date,
    name:filteredData[0].name,
    title:filteredData[0].title,
    content:filteredData[0].content,
    category:filteredData[0].category
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
    setCurrentInfo({
      ...currentInfo,
      [e.target.name]:e.target.value
    })
  }

  const handleCancel = () =>{
    setCurrentInfo({
      id:filteredData[0].id,
      created_date:filteredData[0].created_date,
      name:filteredData[0].name,  
      title:filteredData[0].title,
      content:filteredData[0].content,
      category:filteredData[0].category,
    })
    setIsEdit(!isEdit)
  }

  const handleDelete = () =>{
    if(window.confirm("정말로 삭제하시겠습니까?")) {
      dispatch(DELETE(filteredData[0].id))
      navigate("/")
    }else{
      return
    }
  }

  const handleUpdate = () =>{
    dispatch(UPDATE(currentInfo))
    setIsEdit(!isEdit)
  }

  return (
    <>
      {isEdit
        ?
        <div className = "Item">
          <select name="category" value = {currentInfo.category} onChange = {handleChange}>
            <option value="가">가</option>
            <option value="나">나</option>
            <option value="다">다</option>
          </select><br />
          <input name = "name" value = {currentInfo.name} onChange={handleChange}/>
          <p className ="Item_created_date">{new Date(filteredData[0].created_date).toLocaleString()}</p>
          <input name="title" value = {currentInfo.title} onChange = {handleChange} />
          <textarea className ="Item_textarea" name = "content" value = {currentInfo.content} onChange={handleChange}></textarea>
          <button onClick = {handleCancel}>취소</button>
          <button onClick = {handleUpdate}>수정</button>
        </div>
        :
        <>
          <p className="Item_back" onClick = { () =>{ navigate("/") }} >홈으로가기</p>
          <div className = "Item">
            <p className ="Item_name">{filteredData[0].category}</p>
            <p className ="Item_name">{filteredData[0].name}</p>
            <p className ="Item_created_date">{new Date(filteredData[0].created_date).toLocaleString()}</p>
            <p className ="Item_title">{filteredData[0].title}</p>
            <p className ="Item_content">{filteredData[0].content}</p>
            <button onClick = {handleDelete}>삭제</button>
            <button onClick = {handleCancel}>수정</button>
          </div>
        </>
      }
    </>

  )
}


export default DataItem
