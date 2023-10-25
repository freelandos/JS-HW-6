const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  setCookie('modalclosed', 'true');
})

if (getCookie('modalclosed') !== 'true') {
  modal.classList.add('modal_active');
}