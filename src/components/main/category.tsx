import {categories} from "../../util/category";

type CategoryProps = {
  setCurrentCategory(value:string):void
}
const Category = ({setCurrentCategory}:CategoryProps) =>{

  return(
    <div className = "Category">
      {
        categories.map((category,idx) => (
          <div className="Category_div" key ={idx}>
            <button onClick = {()=>{setCurrentCategory(category)}}>{category}</button>
          </div>
        ))
      }

    </div>
  )
}

export default Category
