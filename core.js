const login = prompt('Введите логин');
const password = prompt('Введите пароль');

const users = [
  {name: 'Mansur', login: 'mans', password: '1122'},
  {name: 'Madina', login: 'madi', password: '3344'}
]

let userName = 0

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (login === user.login && password === user.password) {
      userName = user.name
  }
}

if (userName) {
    alert("Вы вошли, " + userName)
} else {
    alert("Неправильный логин или пароль")
}
