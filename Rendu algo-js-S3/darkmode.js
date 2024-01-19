let darkmode = document.querySelector('.darkmode')
darkmode.addEventListener('click', () =>{
    let body = document.querySelector('body')
    if (body.classList.contains('dark')){
        console.log()
        body.classList.remove('dark')
    } else {
        body.classList.add('dark')
        console.log()
    }
})