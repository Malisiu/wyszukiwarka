const li = document.querySelectorAll('li');
const input = document.querySelector('.search');

const searchEngine = e => {
    
    const text = e.target.value;
    console.log(text);
    
    li.forEach(el => {
        if(el.textContent.toUpperCase().indexOf(text.toUpperCase()) === -1){
            el.style.display= 'none'
        }else {
            el.style.display ='block'
        }
    })

}
input.addEventListener('keyup',searchEngine)
