import React from 'react';

const ProductDeatails = ({product}) => {
    
    return (

        <>
     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{product.category}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body row  flex-column">
                <div className="col-12">
                    <img src={product.image} className="w-100"  />
                </div>
                <div className="col-12">
                    <h2 className="h6  py-2">Name  :     <span className="text-muted">  {product.title}</span> </h2>
                    <h2 className="h6">      Describtion :     <span className="text-muted">{product.description}</span></h2> 
                    <h2 className="h6  py-2">Price :     <span className="text-success">{product.price}$</span></h2> 
                    <h2 className="h6">      Category :     <span className="text-muted">{product.category}</span></h2> 
                </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
</>
        
    );
}

export default ProductDeatails;
