import React from 'react'


export default function Product({product , setProduct }) {

    return (
    <>
    <div  className=" col-lg-4 col-md-6 col-sm-12 p-5 hover" onClick={() => setProduct(product)}  >
                      
                            <img src={product.image}  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  style={{cursor: 'pointer'}} className="w-100" alt=""  />
                            <h2 className="h6  py-2">Name  :<span className="text-muted">  {product.title}</span> </h2>
                            <h2 className="h6  ">    Price :<span className="text-success">{product.price}</span></h2>
                            </div>
    </>
  )
}
