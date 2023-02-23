import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { IData } from "../../store/board";
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from "react-redux";
import { ADD } from "../../store/board";
import { TOGGLE } from "../../store/isCreate";

const New = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [info,setInfo] = useState<IData>({
    id:"",
    created_date:0,
    name:"",
    title:"",
    content:"",
    category:"가",
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setInfo({
        ...info,
        [e.currentTarget.name]:e.currentTarget.value
      })
  }

  const handleButton = () =>{  
    dispatch(ADD({...info,id:uuidv4(),created_date:new Date().getTime()}))
    navigate("/")
  }

  useEffect(() => {
    dispatch(TOGGLE(false))
    return () => {
      dispatch(TOGGLE(true));
    }
  }, []);
  
  return(
    <>
      <div className = "New">
        <div className="New_div">
          <input placeholder="작성자" name = "name" value = {info.name} onChange = {handleChange}/>

          <input placeholder="제목" name ="title" value = {info.title} onChange = {handleChange} />

          <select name="category" value = {info.category} onChange = {handleChange}>
            <option value="가">가</option>
            <option value="나">나</option>
            <option value="다">다</option>
          </select>

          <textarea placeholder="내용을 입력하세요" name = "content" value = {info.content} onChange = {handleChange} />
          
          <button onClick = {handleButton}> 작성하기</button>
        </div>

      </div>

    </>
  )
}


export default New
