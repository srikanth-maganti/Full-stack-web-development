let arr=[7,9,0,-2];
console.log(arr.slice(0,3));
//=====================================
console.log(arr.slice(-3));

//=====================================

let str=prompt("enter a string");
if(str)
{
    console.log("not blank");
}
else
{
    console.log("blank");
}
//========================================================
let h="   head   ";
console.log(h.trim());
//==========================================================
let string="Apnacolllege";
let i=0;
if(string[i]==string[i].toLowerCase())
{
    console.log("small");
}
else
{
    console.log("not");

}

//=========================================================
if(arr.includes(3))
{
    console.log("in ");
}
else
{
    console.log("not in");
}
