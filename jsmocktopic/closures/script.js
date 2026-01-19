const listdiv = document.getElementById("listdiv")
const btn = document.getElementById("button")
const input = document.getElementById("input")

btn.addEventListener("click" , () => {
    console.log("clicked")
    const li = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const editbutton = document.createElement("button");
    deleteBtn.innerText = "delete"
    
    

    const val = input.value;
    li.placeholder = val
    li.disabled  = true
    console.log(input.value)
    listdiv.appendChild(li);
    listdiv.appendChild(deleteBtn);
    listdiv.appendChild(editbutton);
    input.value = " "
    var isClicked = false
    isClicked ? editbutton.innerText = "ok" : editbutton.innerText = "edit"

    deleteBtn.addEventListener("click", () => {
        listdiv.removeChild(li)    
        listdiv.removeChild(deleteBtn)   
        listdiv.removeChild(editbutton)   
         
    })
    editbutton.addEventListener("click", () => {
        isClicked = !isClicked
        isClicked ? li.disabled  = false : li.disabled  = true

        if(isClicked == true && li.value != ""){
            li.placeholder = li.value
        }
        
         
    })

    // listdiv.appendChild(li);
})



