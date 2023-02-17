import {useState} from "react";
import {useNavigate} from "react-router-dom";

export interface IInfo {
  name:string,
  title:string,
  content:string,
  category:string,
}

type NewProps = {
  onCreate(value:IInfo):void
}

const New = ({onCreate}:NewProps) => {

  const navigate = useNavigate()

  const [info,setInfo] = useState<IInfo>({
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
    onCreate(info)
    setInfo({
      name:"",
      title:"",
      content:"",
      category:"가",
    })
    navigate("/")

  }

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
