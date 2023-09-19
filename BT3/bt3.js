var Openbtn = document.querySelector('.open-modal-btn')
var Modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal_header i')
var btnClose = document.querySelector('.modal_footer button')

function toggleModal(e)
{
    console.log(e.target);
    Modal.classList.toggle('hide')}

    Openbtn.addEventListener('click',toggleModal)
    Modal.addEventListener('click',toggleModal)
    iconClose.addEventListener('click',toggleModal)
    btnClose.addEventListener('click',function(e)
    {
            if(e.target==e.currentTarget)
                toggleModal()
    })