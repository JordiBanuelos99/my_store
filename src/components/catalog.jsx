import {useEffect, useState} from 'react';
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService"

const Catalog = () => {
    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    }
    useEffect(()=>{
        loadCatalog();
    },[])
    return(
        <div className="catalog container">
            <h2>This is our amazing catalog</h2>
            <h3>We have {products.length} products!</h3>
            {
                products.map((prod)=>(
                    <Product key={prod.id} data={prod}></Product>
                ))
            }
        </div>
    );
}

export default Catalog;