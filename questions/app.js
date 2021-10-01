const questions = document.querySelectorAll('.question');

questions.forEach((question,index) => {

    const btn = question.querySelector('.btn');

    btn.addEventListener('click',()=>{
        question.classList.toggle('show')
        const isToggle =  btn.childNodes[1].classList.contains("fa-plus")
        if(isToggle){
            btn.childNodes[1].classList.remove('fa-plus')
            btn.childNodes[1].classList.add('fa-minus')
        }else{
            btn.childNodes[1].classList.add('fa-plus')
            btn.childNodes[1].classList.remove('fa-minus')
        }
    })
});