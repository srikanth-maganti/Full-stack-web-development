import Card from "./Card.jsx";
function Cards(){
    let styles={
        display:"flex",
        flexWrap:"Wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <div style={styles}>
            <Card title="apple laptop" idx={0}/>
            <Card title="hp laptop" idx={1}/>
            <Card title="dell laptop"idx={2}/>
            <Card title="acer laptop" idx={3}/>
        </div>
    )
}

export default Cards;