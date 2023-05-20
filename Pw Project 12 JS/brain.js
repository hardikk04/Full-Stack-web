const decrementbtn = document.getElementById("decrement")
const incrementbtn = document.getElementById("increment")
const resetbtn = document.getElementById("reset")
const displayvalue = document.getElementById("value")

const ColorChange = () =>
{
    let val = "0123456789ABCDEF";
    let cons = "#";

    for(i=0 ; i<6; i++)
    {
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
};

// For Decrement 
decrementbtn.addEventListener("click", () =>
{
    let value = Number(displayvalue.innerText);
    if(value<1)
    {
        alert("Neg not allow");
    }
    else
    {
        displayvalue.innerText = value - 1;
        document.body.style.backgroundColor = ColorChange();  
        document.getElementById("decrement").style.backgroundColor = ColorChange();
    }
}
)
incrementbtn.addEventListener("click", () =>
{
    let value = Number(displayvalue.innerText);
    if(value>=10)
    {
        alert("10+ not allow");
    }
    else
    {
        displayvalue.innerText = value + 1;
        document.body.style.backgroundColor = ColorChange();  
        document.getElementById("increment").style.backgroundColor = ColorChange();
    }
})

resetbtn.addEventListener("click", () =>
{
    displayvalue.innerText = 0;
    document.body.style.backgroundColor = ColorChange();  
    document.getElementById("reset").style.backgroundColor = ColorChange();
})

