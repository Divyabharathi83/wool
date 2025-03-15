import React, { useState } from "react";
import SideBar from "../sidebar";
import "./compostyle/product.css";

export default function Product() {
  const products = JSON.parse(localStorage.getItem("ProductList")) || [];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const filteredProducts = products.filter(product => {
    const isCategoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const isSearchMatch = 
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.productDes.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });

  return (
    <div className="product">
      <SideBar activeItem="3" />
      <div className="ProductComp">
        <h1>Product</h1>

        <div>
          <input 
            type="text" 
            placeholder="Search for product" 
            name="search" 
            value={searchTerm} 
            onChange={handleSearchChange} 
            id="searchProd"
          />
          <div>
            Category
          <select className="categorySelect" onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Dress">Dress</option>
            <option value="Accessories">Accessories</option>
            <option value="Gift Items">Gift Items</option>
          </select>
        </div>
        </div>
        <ul id="productList">
          {filteredProducts.map((i) => (
            <li className="products" key={i.productName}>
              <img src={i.productPreview} className="productImg" alt="preview pic" />
              <h1>{i.productName}</h1>
              <p>{i.productDes}</p>
              <p>Quantity: {i.productQuantity}</p>
              <h3>Price: {i.productPrice}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
