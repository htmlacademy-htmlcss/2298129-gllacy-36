document.addEventListener('DOMContentLoaded', function () {

  let linksOnDropdowns = document.querySelectorAll('.link--dropdown-list');
  linksOnDropdowns.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('-active');
      el.parentNode.querySelector('.dropdown-list').classList.toggle('-show')
    })
  })

  let buttonsThird = document.querySelectorAll('.js-header-button');
  buttonsThird.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('-active');
      buttonsThird.forEach(el2 => {
        if (el !== el2 && el2.parentNode.querySelector('.modal-block').classList.contains('-show')) {
          el2.classList.remove('-active');
          el2.parentNode.querySelector('.modal-block').classList.remove('-show')
        }
      })
      el.parentNode.querySelector('.modal-block').classList.toggle('-show')
    })
  })


  let buttonUnset = document.querySelector('.button--unset');
  let searchInput = buttonUnset.parentNode.querySelector('.js-search');
  buttonUnset.addEventListener('click', function (e) {
    e.preventDefault();
    searchInput.value = '';
  })

  searchInput.addEventListener('input', () => {
    if (searchInput.value !== '') {
      buttonUnset.classList.add('-show')
    }
  })

  let buttonFeedback = document.querySelector('.js-feedback-button');
  let formFeedback = document.querySelector('.js-feedback-form');
  buttonFeedback.addEventListener('click', () => {
    formFeedback.classList.add('-show-flex');
  });
})
