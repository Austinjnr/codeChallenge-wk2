document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
  } )
  const url = "http://localhost:3000/characters"
  
  function getCharacters(){
    fetch (url)
    .then (res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(characters => {
            displayCharacters(characters)
        });
    })
  }
  function displayCharacters(characters){
    console.log(characters.name);
    const name = document.createElement('p');
    name.innerHTML = characters.name
    const main = document.getElementById("main")
    main.append(name)
    name.addEventListener("click",() => {
        getSingleCharacters(characters)
    })
  }
 
  function getCharacters(){
     fetch ("http://localhost:3000/characters")
     .then (res => res.json())
     .then(data => {
         console.log(data)
         data.forEach(characters => {
             displayCharacters(characters)
         });
     })
   }
   function displayCharacters(characters){
     console.log(characters.name);
     const name = document.createElement('p');
     name.innerHTML = characters.name
     const main = document.getElementById("main")
     main.append(name)
     name.addEventListener("click",() => {
         getSingleCharacters(characters)
     })
   }
   function getSingleCharacters(characters){
    document.getElementById("charname").innerHTML = characters.name
    document.getElementById("charimage").src = characters.image
    document.getElementById("charlikes").textContent= `Votes ${characters.votes}`
    const btn=document.getElementById("charlikes")
    btn.textContent = `Likes ${characters.votes}`
    btn.addEventListener("click", () =>{
     characters.votes++;
     btn.textContent= `Likes ${characters.votes}`
   })
   }