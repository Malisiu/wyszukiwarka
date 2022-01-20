const  ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
const input = document.querySelector('.search')

input.addEventListener('keyup' ,function(){
    for(let i = 0; i < li.length; i++){
        li[i].setAttribute('style','display: block')
        if(li[i].textContent.toUpperCase().includes(input.value.toUpperCase()) === false){
            li[i].setAttribute('style','display:none')
        }
    }
})

