

function renderelement(maincontainer,reactElement)
{
    domelement=document.createElement(reactElement.type);
    for(let prop in reactElement.props)
    {
        domelement.setAttribute(prop,reactElement.props[prop]);
    }
    domelement.innerHTML=reactElement.children;

    maincontainer.appendChild(domelement);
}
let reactElement={
    type:"a",
    props:{
        href:"https//google.com",
        target:"_black"
    },
    children:"click here to google"
}


let maincontainer=document.getElementById("root");
renderelement(maincontainer,reactElement);