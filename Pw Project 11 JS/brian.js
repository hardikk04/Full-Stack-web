const btn = document.getElementById("button");

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

function Calling()
{
    document.body.style.backgroundColor = ColorChange();  
    document.getElementById("button").style.backgroundColor = ColorChange();
     
}

    btn.addEventListener("click",Calling);