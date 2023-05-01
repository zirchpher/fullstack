(function () {
  // Vamos a pasarle un objeto como parámetro a una función
  function printFullname(person: { name: string; lastname: string }): void {
    console.log(`Your Fullname is ${person.name} ${person.lastname}`);
  }

  printFullname({
    name: 'Remix',
    lastname: 'Zapata',
  });

  // Segunda forma de hacerlo
  type User = { email: string; password: string | number };

  const login = (user: User) => {
    console.log(user.email, user.password);
  };

  const jesusUser: User = {
    email: 'hdjesus',
    password: 12121,
  };

  login(jesusUser);
})();
