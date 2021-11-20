const burgerBtn = document.getElementById('burger-button');
const navigation = document.querySelector('.nav');
let open = false;

burgerBtn.addEventListener('click', (e) => {
  if (!open) {
    burgerBtn.classList.add('burgerOpen');
    navigation.style.height = '100%';
    document.body.style.overflow = 'hidden';
    open = true;
  } else {
    burgerBtn.classList.remove('burgerOpen');
    navigation.style.height = '0%';
    document.body.style.overflow = 'scroll';
    open = false;
  }
});
