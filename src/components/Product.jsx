import React from 'react'


export default function Product({product , setProduct }) {

    return (
    <>
    <div
      style={{ display:"flex", flexDirection:"column", justifyContent:"space-between"}} 
    className=" col-lg-4 col-md-6 col-sm-12 p-5 hover" 
    onClick={() => setProduct(product)}  >

     <div
     style={{cursor: 'pointer', height:"300px", objectFit:"contain", display:"flex", justifyContent:"center"}}
     >                 
   <img src={product.image}  data-bs-toggle="modal" style={{objectFit:"contain", height:"100%"}} data-bs-target="#staticBackdrop"   className="w-100" alt=""  />
   </div>

   <div>
   <div className="row">
  <div className=" text-truncate">
  <h2  className="h6  py-2">Name  :<span className="text-muted">  {product.title}</span> </h2>
  </div>
</div>
   <h2 className="h6  ">    Price :<span className="text-success">{product.price}</span></h2>
   </div>
   
   </div>
    </>
  )
}
