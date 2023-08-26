import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css'


const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 'Rs 143.98',
      imageUrl: '/products/product1.png',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 'Rs 143.98',
      imageUrl: '/products/product2.png',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        price: 'Rs 143.98',
        imageUrl: '/products/product3.png',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description of Product 4',
        price: 'Rs 143.98',
        imageUrl: '/products/product4.png',
      },
      
  ];

  return (
    <div className="container mt-5 " style={{backgroundColor: "#E7F4E7"}} >
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-3 ">
            <div class="card shadow-sm" style={{width: "18rem"}}>
            <img class="card-img-top" src={product.imageUrl} alt={product.name} />
            <div class="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
