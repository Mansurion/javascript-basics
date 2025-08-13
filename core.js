let login = prompt('введите логин');

if (login === 'mans') {

  let password = prompt('введите пароль');

  if (password === 'qwerty') {
    alert('вы вошли!');
  } else if (password === '' || password === null) {
    alert('Отменено');
  } else {
    alert( 'Неверный пароль' );
  }

} else if (login === '' || login === null) {
  alert('Отменено');
} else {
  alert('неверный логин');
}