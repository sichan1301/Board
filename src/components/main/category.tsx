import {categories} from "../../util/category";

const Category = ({setCurrentCategory}) =>{

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
