import {useState} from "react";

const New = ({onCreate}) => {
  const [info,setInfo] = useState({
    name:"",
    title:"",
    content:"",
    category:"가",
  })

  const handleChange = (e) =>{
      setInfo({
        ...info,
        [e.target.name]:e.target.value
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
  }



  return(
    <>
      <div className = "New">
        <div className="New_div">
          <input placeholder="작성자" name = "name" value = {info.name} onChange = {(e) => {handleChange(e)}}/>

          <input placeholder="제목" name ="title" value = {info.title} onChange = {(e)=>{handleChange(e)}} />

          <select name="category" value = {info.category} onChange = {(e)=>{handleChange(e)}}>
            <option value="가">가</option>
            <option value="나">나</option>
            <option value="다">다</option>
          </select>

          <textarea placeholder="내용을 입력하세요" name = "content" value = {info.content} onChange = {(e)=>{handleChange(e)}} />
          
          <button onClick = {handleButton}> 작성하기</button>
        </div>

      </div>

    </>
  )
}


export default New
