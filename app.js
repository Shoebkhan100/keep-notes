const notes = document.querySelector(".notes")
// const note = document.querySelector(".note")




 function addnote  (text=""){


    

    const note = document.createElement("div")

    note.classList.add("note")

    

    
    note.innerHTML = `
    
    
    <div class="nav">
        <div class="btn">
        <button id="trash"><i class="fa-solid fa-trash trash"  ></i></button>
        <button id="save"><i class="fa-solid fa-floppy-disk save" ></i></button>
        </div>
    </div>
    <div class="text">
        <textarea >${text}</textarea>
    </div>
 
 `

 

notes.appendChild(note)

    // notes.insertAdjacentHTML("afterbegin",element)
    
    const trash= note.querySelector("#trash").addEventListener("click", function(){
        // const consirmpage = document.querySelector(".confirmpage")
        // const yes = document.querySelector("#yes") 
        // const cancel= document.querySelector("#cancel")
        // consirmpage.classList.add('display')
       

 note.remove()
 savenotes()
})


// let Textarea = note.querySelector("textarea")


// Textarea.addEventListener("change" , (event)=>{
//     let textvalue = event.target.value

//     console.log(textvalue)

// })


const save = note.querySelector("#save").addEventListener("click", function(){

savenotes()
    
   
})



    
    
}


const savenotes = ()=>{
    let Alltextarea = document.querySelectorAll("textarea")
  let data = []
  

  Alltextarea.forEach((cur)=>{

    return data.push(cur.value)

    

  })
  localStorage.setItem("shoeb" , JSON.stringify(data))


   


}


let localget = JSON.parse(localStorage.getItem("shoeb"))
 localget.forEach((value)=>{addnote  (value)})

 
    

























