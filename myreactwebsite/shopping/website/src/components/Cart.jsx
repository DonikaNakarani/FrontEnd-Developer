import React,{useState,useEffect} from 'react'
import { useSelector,useParams } from 'react-redux'


const Cart = () => {
    const state= useSelector((state)=> state.handleCart);


    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            
            const response = await fetch(`https://fakestoreapi.com/products`);
                setProduct(await response.json());
                
            }
        getProducts();
    }, [])

   
   
  return (
    <>
    
    {
        Object.keys(product).map((item,index)=>{
            const {title,image,price,qty}=product[item];  
            return(
                <div>
            <div className="container mt-5 d-block align-items-center">
                <div className="row">
                    <div className="col-md-4">
                        <img src={image} alt={title} height="200px" width="180px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{title}</h3>
                        <p className="lead fw-bold">
                            {qty} x ${price} = ${qty * price}
                        </p>
                        <button className="btn btn-outline-dark me-4" >
                            <i className='fa fa-minus'></i>
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className='fa fa-plus'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
            )})
            
    }
    
    </>
  )
}

export default Cart