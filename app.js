// template_1h3qboi
// service_osxe6zj
// OFWbbLksTbZIZ0cT9

function contact() {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"

  emailjs
    .sendForm(
      'service_osxe6zj',
      'template_1h3qboi',
      event.target,
      'OFWbbLksTbZIZ0cT9'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email servie is temporarily unavailable. Please contact me directly at zachary.c.cuneo@gmail.com"
    );
  })  
}