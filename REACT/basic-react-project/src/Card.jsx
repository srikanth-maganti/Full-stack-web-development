import Price from "./Price.jsx";
function Card({title,idx}){
    let oldprice=["1000","2000","3000","4000"];
    let newprice=["700","1700","2700","3700"];
    let Descriptions=[["fast","efficient"],["smooth","userfriendly"],["compact","adaptable"],["portable"]];
    let styles={border:"1px solid black",borderRadius:"14px",margin:"20px",width:"150px"};
    return(
        <div style={styles}>
                <h3>{title}</h3>
                <p>{Descriptions[idx].map((feature)=><li>{feature}</li>)}</p>
                <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
    );
}

export default Card