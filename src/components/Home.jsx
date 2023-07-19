import React from 'react';
import  axios  from "axios";
import {useEffect , useState} from 'react'
import Product from './Product';
import ProductDeatails from './ProductDeatails';



const Home = () => {

//states
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [searchinput, setsearchInput] = useState('')
    const [isloading, setIsloading] = useState(false)

//request data from api
    async function getData() {
            try{
                setIsloading(true)
                let {data} =await axios.get('https://fakestoreapi.com/products')
            setProducts(data)
            setIsloading(false)
        }
            catch(error)
            {console.error(); }
}

//fetching data
    useEffect(() => { getData()    }, []);
    
    return (
            <div className="container">
            <div className="w-50 py-5 mx-auto ">
                <h6 className="h1 text-center">StartUp Defenders <br/> First Task </h6>    
            </div>
        
{/* loading */}
        {isloading? 
            <div className="text-center">
                <i className="fas fa-spin fa-spinner h1"></i>
            </div>
            :
// search
            <div className="w-75 py-5 mx-auto ">
                <input onChange={(e)=>setsearchInput(e.target.value)} id='search' name='search'className='form-control ' value={searchinput} placeholder='search by name' type="text" />
            </div> }

            <div className="row justify-content-around align-items-center">  
                {products.filter((product) =>product.title.toLowerCase().includes(searchinput.toLowerCase()) ).map((product , i)=>
                
                // data displaying 
                <Product key={i} product={product} setProduct={setProduct} />)}
                
                {/* modal */}
                <ProductDeatails product={product}/> 
            </div>
            </div>
        
    );
}

export default Home;
