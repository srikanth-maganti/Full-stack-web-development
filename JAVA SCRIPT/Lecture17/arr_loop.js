

//array with looop
let fruits=["appke","mango","banana","pineapple","orange"];
for(let j=0;j<fruits.length;j++)
{
    console.log(j,fruits[j]);
}

for(let j=fruits.length-1;j>=0;j--)
{
    console.log(j,fruits[j]);
}


//nested arry with nested loop
let heroes=[["spiderman","thor","ironman"],["superman","batman","flash"]];
for(i=0;i<heroes.length;i++)
{
    console.log(i,heroes[i]);
    for(let j=0;j<heroes[i].length;j++)
    {
        console.log("j=",j,heroes[i][j]);
    }
}


//for of
for(frt of fruits)
{
    console.log(frt);
}



//nested for of
for(list of heroes)
{
    for(hero of list)
    {
        console.log(hero);
    }
}