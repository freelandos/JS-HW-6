const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signoutBtn = document.getElementById('signout__btn');
const url = 'https://students.netoservices.ru/nestjs-backend/auth';

welcomeUser();

function welcomeUser() {
  const storedId = localStorage.getItem('id');
  const isUserSignin = !!storedId;
  userId.textContent = storedId;

  signin.classList.toggle('signin_active', !isUserSignin);
  welcome.classList.toggle('welcome_active', isUserSignin);
  signoutBtn.classList.toggle('signout__btn_active', isUserSignin);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const request = new XMLHttpRequest();

  request.addEventListener('load', () => {
    const response = JSON.parse(request.responseText);

    if (response.success) {
      localStorage.setItem('id', response['user_id']);
      welcomeUser();
    } else {
      alert('Неверный логин/пароль');
    }
  })

  request.open('POST', url);
  const formData = new FormData(form);
  request.send(formData);
  form.reset();
})

signoutBtn.addEventListener('click', () => {
  localStorage.removeItem('id');
  welcomeUser();
})