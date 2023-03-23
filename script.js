document.addEventListener('DOMContentLoaded', function () {

  let linksOnDropdowns = document.querySelectorAll('.link--dropdown-list');
  linksOnDropdowns.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('-active');
      el.parentNode.querySelector('.dropdown-list').classList.toggle('js-show')
    })
  })

  let buttonsThird = document.querySelectorAll('.js-header-button');
  buttonsThird.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('-active');
      buttonsThird.forEach(el2 => {
        if (el !== el2 && el2.parentNode.querySelector('.modal-block').classList.contains('js-show')) {
          el2.classList.remove('-active');
          el2.parentNode.querySelector('.modal-block').classList.remove('js-show')
        }
      })
      el.parentNode.querySelector('.modal-block').classList.toggle('js-show')
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
      buttonUnset.classList.add('js-show')
    }
  })

  let buttonFeedback = document.querySelector('.js-feedback-button');
  let formFeedback = document.querySelector('.js-feedback-form');
  buttonFeedback.addEventListener('click', () => {
    formFeedback.classList.add('js-show-flex');
  });
})
