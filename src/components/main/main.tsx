import Category from "./category";
import DataList from "./dataList";
import {useState} from "react";
import {IData} from '../../App';

type MainProps = {
    data:IData[]
}

const Main = ({data}:MainProps) => {
  const [currentCategory,setCurrentCategory] = useState<string>("전체")

  return (
    <>
      <Category setCurrentCategory={setCurrentCategory} />
      <DataList data={data} currentCategory={currentCategory}/> <br />
    </>
  )
}


export default Main

