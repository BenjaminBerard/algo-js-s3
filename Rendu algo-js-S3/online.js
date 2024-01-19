let liste = document.querySelectorAll('.tab')


liste.forEach((element) => {
    element.addEventListener('click', () => {
        liste.forEach((e) =>{
            e.classList.remove('tab-active')
        })
        document.querySelectorAll('.content').forEach((e) =>{
            e.classList.remove('active')
        })
        element.classList.add('tab-active')
        if (element.classList.contains('tab-Axe-A')){
            document.querySelector('.Axe-A').classList.add('active')
        }
        if (element.classList.contains('tab-Axe-B')){
            document.querySelector('.Axe-B').classList.add('active')
        }
        if (element.classList.contains('tab-Axe-C')){
            document.querySelector('.Axe-C').classList.add('active')
        }
    })
})
