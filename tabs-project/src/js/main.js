(function () {
    const btnOne = document.getElementById('btnOne')
    const btnTwo = document.getElementById('btnTwo')
    const btnThree = document.getElementById('btnThree')
    const close = document.getElementById('btnClose')
    const btn = document.getElementsByClassName('btn')
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const content = document.getElementsByClassName('content')

    btnOne.addEventListener('click', function () {
        for(let i=0; i < content.length; i++) {
            content[i].style.display = 'none';
        }
        for (let i=0; i < btn.length; i++){
            btn[i].style.background = 'lightgray'
        }
        btnOne.style.background = 'lightblue'
        one.style.display = 'block'
    })
    btnTwo.addEventListener('click', function () {
        for(let i=0; i < content.length; i++) {
            content[i].style.display = 'none';
        }
        for (let i=0; i < btn.length; i++){
            btn[i].style.background = 'lightgray'
        }
        btnTwo.style.background = 'lightcoral'
        two.style.display = 'block'
    })
    btnThree.addEventListener('click', function () {
        for(let i=0; i < content.length; i++) {
            content[i].style.display = 'none';
        }
        for (let i=0; i < btn.length; i++){
            btn[i].style.background = 'lightgray'
        }
        btnThree.style.background = 'lightgreen'
        three.style.display = 'block'
    })
    close.addEventListener('click', function () {
        for (let i=0; i < content.length; i++){
            content[i].style.display = 'none'
        }
        for (let i=0; i < btn.length; i++){
            btn[i].style.background = 'lightgray'
        }
    })
})()