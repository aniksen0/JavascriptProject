const hexvalue=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

document.getElementById("btn").addEventListener("click",function()
{
    let hexcolor="#";
    for( let i=0;i<6;i++)
    {
        let value=random1();
        hexcolor+=hexvalue[value];
    }
    console.log(hexcolor);
    document.body.style.backgroundColor=hexcolor;
    document.querySelector('.colorName').textContent=hexcolor;
});

function random1()
{
    return Math.floor(Math.random()*hexvalue.length);
}