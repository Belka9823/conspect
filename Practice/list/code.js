const button = document.getElementById("but")
let list = document.getElementById ("List") 



function adding ()
{
    let information = document.getElementById("txt")
    if (information.value)
    {
        let block = document.createElement("div");
        block.textContent = information.value;
        
        let delet = document.createElement("button");
        delet.textContent = "Delete";
        
        list.append(block);
        block.append(delet);

        delet.addEventListener("click", () =>
        {
        block.remove();
        }
        )
    }
    else 
    {
        return 1;
    }
    information.value = ""
}


button.addEventListener("click", adding);
