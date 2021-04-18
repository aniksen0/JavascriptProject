const colors=['green','red',"rgba(133,122,111)","#f15025","Pink ",	"Crimson",	"Red",	"Maroon",	"Brown",	"Misty Rose",	"Salmon",	"Coral",	"Orange-Red",	"Chocolate",	"Orange	Gold",	"Ivory",	"Yellow",	"Olive", "indianred",	"Yellow Green",	"Lawn", "green",	"Chartreuse",
 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
"Lime",	"Green",	"Spring green",	"Aquamarine",	"Turquoise",	"Azure",	"Aqua",	"Teal",	"Lavender",	"Blue",	"Navy",	"Blue-Violet",	"Indigo",	"Dark", "Violet",	"Plum",	"Magenta",	"Purple",	"Red-Violet",
 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
"Tan",	"Beige",	"Slate", "gray"];
const btn=document.getElementById("btn");
const color=document.querySelector(".colorName");

btn.addEventListener("click",function()
{
    const randomNumber=random1();
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function random1()
{
    return Math.floor(Math.random()*colors.length);
}

