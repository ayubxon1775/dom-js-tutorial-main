let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    contactForm = document.getElementsByClassName('contactform_name') [0],
    text = document.getElementsByTagName('h2') [0],
    modal = document.querySelector('.modal'),
    btn = document.querySelectorAll('.main_tel_title') [0],
    closeBtn = document.querySelector('.close'),
    message = document.getElementsByName('message')[0];



    // First way (No)
function hover() {
    text.textContent = 'Действительно хаммаси'
}

    // Second way (No)
   text.onmouseenter = hover

    //    Third way
    text.addEventListener('mouseenter', hover)
    text.addEventListener('mouseleave', function() {
        text.textContent = 'Все включено'
    })

receiveBtn.addEventListener('click', function() {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

contactForm.addEventListener('input', function() {
    message.value = `Меня завут ${contactForm.value} и я хочу:`
})
