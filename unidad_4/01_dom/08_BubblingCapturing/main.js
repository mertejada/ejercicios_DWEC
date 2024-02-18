for(let elemento of document.querySelectorAll("*:not(p)")){
    elemento.addEventListener("click",(evento)=>alert("I'm at bubbling "+evento.currentTarget.tagName + " y el evento lo originó "+evento.target.tagName));
    elemento.addEventListener("click",(evento)=>{
        alert("I'm at capture phase in "+evento.currentTarget.tagName + " y el evento lo originó "+evento.target.tagName);
    }, {capture:true}); 