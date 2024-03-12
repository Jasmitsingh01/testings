import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Product() {

    const [Active, setActive] = useState(false)
    const navigate=useNavigate();
    useEffect(()=>{
      const AccessToken  =  JSON.parse(localStorage.getItem('token'));
      if(AccessToken){
        setActive(true)
      }
    },[])
  return (
    Active?
    <div>
    <form >
        <div>
            <label htmlFor="ProductName">Product Name</label>
            <input type="text" placeholder="ProductName" name="ProductName" id="ProductName"/>
        </div>
        <div>
            <label htmlFor="ProductImage">Product Image</label>
            <input type="file" name="ProductImage" id="ProductImage"  />
        </div>
        <div>
            <label htmlFor="ProductPrice">Product Price</label>
            <input type="number" placeholder="ProductPrice" id="ProductPrice" />
        </div>
        <button type="submit">Add Product</button>
    </form>
</div>:
navigate('/login')
  )
}

export default Product