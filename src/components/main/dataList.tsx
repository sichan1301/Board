import {Link} from "react-router-dom";
import Paging from "./paging";
import {useEffect, useState} from "react";
import {IData} from "../../App";

type DataListProps = {
  data:IData[],
  currentCategory:string
}

const DataList = ({data,currentCategory}:DataListProps) =>{

  const [currentPost,setCurrentPost] = useState<IData[]>([])
  const [page,setPage] = useState<number>(1)

  const postPerPage:number = 3
  const indexOfLastPage:number =  page * postPerPage
  const indexOfFirstPage:number = indexOfLastPage - postPerPage
  const handlePageChange = (page:number) => {
    setPage(page);
  };

  const filterData = (data:IData[],currentCategory:string):IData[] =>{
    if(currentCategory === "전체"){
      return data
    }
    return data.filter((item:IData) => item.category === currentCategory)
  }

  const filteredData:IData[] = filterData(data,currentCategory);

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
              currentPost.map((item:IData) => {
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
