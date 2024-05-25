import Product from "./Product.jsx";
function ProductTab(){
    let features=["hi-tech","durable"];
    return (
        <>
            <Product title="laptop" price={16000} features={features} features2={{a:"appples"}}/>
            <Product title="phone"  />
            <Product title="computer" price="30,000"/>
        </>
    
);
       
}

export default ProductTab;