import "./Product.css";
function Product({title,price=1,features="none",features2="none"}){
    let isdiscount=price>15000;
    let styles={backgroundColor:isdiscount? "yellow":""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>{price}</p>
            {price>15000 ? <p>Discount of 5%</p>:null}
            {isdiscount && <p>Discount of 10%</p> }
            {features!="none" ?<p>{features.map((feature)=><li>{feature}</li>)}</p>:null}
            {features2!="none" ? <p>{features2.a}</p>:null}
           

        </div>
    );
}

export default Product;