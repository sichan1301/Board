import Category from "./category";
import DataList from "./dataList";
import {useState} from "react";

const Main = ({data}) => {
  const [currentCategory,setCurrentCategory] = useState("전체")

  return (
    <>
      <Category setCurrentCategory={setCurrentCategory} />
      <DataList data={data} currentCategory={currentCategory}/> <br />
    </>
  )
}


export default Main

