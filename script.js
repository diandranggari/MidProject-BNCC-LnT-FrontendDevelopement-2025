document.addEventListener('DOMContentLoaded', () =>{
    
    let btn = document.querySelector('#btn-go-down')
    console.log(btn);

    btn.addEventListener('click', function(){
        let section = document.querySelector('#ab');
        section.scrollIntoView(section, 1000)
    });

});