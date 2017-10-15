fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(users => console.log(users));