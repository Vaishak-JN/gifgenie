async function gif(){
    // let wordapi= await fetch("https://random-word-api.herokuapp.com/word?number=1")
    // let req= await wordapi.json()
    // console.log(req[0])

    let inp=document.querySelector("input")

    let gifapi=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=rsTxQjglZSE5tAAjR7WhdqN3VSljURhp&q=${inp.value}&limit=25&offset=&rating=g&lang=en`)
    let gif =await gifapi.json();
    console.log(Object.keys(gif.data[0]))
    console.log(gif.data[0]["images"]["original"].url)

    let p=document.querySelector("#results")
    p.innerHTML=`Results for <span>${inp.value}</span>`

    let obj=document.querySelectorAll("object")
    for( var i=0;i<obj.length;i++){
        obj[i].data=gif.data[i].images.original.url
    }
    // img.src=gif.data[0]["images"]["original"].url

    inp.value=""
}
document.querySelector("button").addEventListener("click",gif);