// The project of deleting images
/*
document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
})


document.querySelector('#images').addEventListener('click',function(event){
    console.log(event.target.tagName)
    if(event.target.tagName === "IMG"){
        console.log(event.target.id)
        console.log(event.target.parentNode)
         let removeIt = event.target.parentNode;
         removeIt.remove();

    }
})
*/
/*
// The propogation event in js

document.getElementById("images").addEventListener('click',()=>{
    console.log("Images are clicked");


})
document.getElementById('photoshop').addEventListener('click',()=>{
    console.log('photoshop is clicked now')
})

//In the above code you should see in console that photoshop id is being run first than images id thus the 
// concept of propogation is introduce here :
*/
document.getElementById("images").addEventListener('click',()=>{
    console.log("Images are clicked");


},true)
document.getElementById('photoshop').addEventListener('click',function(e){
    alert ('Let see the event ')

    //  e.stopPropagation();
},false )

    



// addEventListener('click',function(){},false/true)