import {Link} from "react-router-dom";
import Paging from "./paging";
import {useEffect, useState} from "react";

const DataList = ({data,currentCategory}) =>{

  const [currentPost,setCurrentPost] = useState([])
  const [page,setPage] = useState(1)

  const postPerPage = 3
  const indexOfLastPage =  page * postPerPage
  const indexOfFirstPage = indexOfLastPage - postPerPage
  const handlePageChange = (page) => {
    setPage(page);
  };

  const filterData = (data,currentCategory) =>{
    if(currentCategory === "전체"){
      return data
    }
    return data.filter(item => item.category === currentCategory)
  }

  const filteredData = filterData(data,currentCategory);

  useEffect(()=>{
    setCurrentPost(filteredData.slice(indexOfFirstPage,indexOfLastPage))
  },[indexOfFirstPage,indexOfLastPage,page])

  useEffect(()=>{
    setCurrentPost(filteredData.slice(0,postPerPage))
  },[currentCategory])

  return(
    <div className = "List">

      {currentPost.length === 0 ? <p className ="List_textnull">게시글이 없습니다.</p> :
        <>
          <table className="table">
            <thead>
              <tr>
                <th>작성자</th>
                <th>제목</th>
                <th>작성날짜</th>
                <th>카테고리</th>
              </tr>
            </thead>
            <tbody>
            {
              currentPost.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td><Link to={`/data/${item.id}`}>{item.title}</Link></td>
                    <td>{new Date(item.created_date).toLocaleDateString()}</td>
                    <td>{item.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Paging totalCount = {filteredData.length} page = {page} postPerPage = {postPerPage} handlePageChange={handlePageChange} />
        </>
      }

    </div>
  )

}


export default DataList
