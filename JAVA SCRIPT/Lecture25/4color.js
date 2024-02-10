function changecolor(color,delay)
{
    return new Promise((resolve,reject)=>{
        let h1=document.querySelector("h1");
        setTimeout(()=>
        {
            h1.style.color=color;
            resolve("changed");
        },delay);

    });
}

changecolor("red",1000)
    .then(()=>{
        return changecolor("green",1000);

    })
    .then(()=>{
        return changecolor("yellow",1000);
    })
    .catch(()=>{
        console.log('faoiled');
    })