function MsgBox({name,textcolor}){
    let styles={color:textcolor};
    return(
        <div>
            <p style={styles}>hello {name}</p>
        </div>
    )
}

export default MsgBox;