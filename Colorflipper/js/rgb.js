

document.getElementById("btn").addEventListener("click",function()
{
    let rgbcolor="";
    for( let i=0;i<2;i++)
    {
        let value=random1()+",";
        rgbcolor+=value;
    }
    let value=random1();
    rgbcolor+=value;
    console.log(rgbcolor);
    document.body.style.backgroundColor="rgb("+rgbcolor+")";
    document.querySelector('.colorName').textContent=rgbcolor;
});

function random1()
{
    return Math.floor(Math.random()*255);
}