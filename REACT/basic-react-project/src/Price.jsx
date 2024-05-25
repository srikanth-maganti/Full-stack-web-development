function Price({oldprice,newprice}){
    let oldstyles={
        textDecorationLine:"line-through"
    };
    let newstyles={
        fontWeight:700,
    };
    let styles={
        backgroundColor:"yellow",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    };
    return (
        <div style={styles}>
             <span style={oldstyles}>{oldprice}</span>
             &nbsp;
            <span style={newstyles}>{newprice}</span>
    
        </div>
    );
       
}

export default Price;