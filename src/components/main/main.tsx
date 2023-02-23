import Category from "./category";
import DataList from "./dataList";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { TOGGLE } from "../../store/isCreate";

const Main = () => {
  const [currentCategory,setCurrentCategory] = useState<string>("전체")

  return (
    <>
      <Category setCurrentCategory={setCurrentCategory} />
      <DataList currentCategory={currentCategory}/> <br />
    </>
  )
}

export default Main

