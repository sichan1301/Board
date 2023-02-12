const Category = ({setCurrentCategory}) =>{

  const categories = ['전체','가','나','다']
  console.log(setCurrentCategory);
  return(
    <div className = "Category">
      {
        categories.map((category,idx) => (
          <div key ={idx}>
            <button onClick = {()=>{setCurrentCategory(category)}}>{category}</button>
          </div>
        ))
      }

    </div>
  )
}

export default Category
