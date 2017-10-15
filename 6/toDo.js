'use strict';

const parseUsersTodo = (data) => {
  return new Promise((resolve, reject) => {

    let userId = data[0].userId,
      userInfo = [],
      completedCounter = 0,
      uncompletedCounter = 0,
      index = 0;

    // data should be sorted by userId before iterated
    data.forEach((item) => {
      if (item.userId === userId) {
        completedCounter = (item.completed) ? completedCounter + 1 : completedCounter;
        uncompletedCounter = (!item.completed) ? uncompletedCounter + 1 : uncompletedCounter;
        userInfo[index] = {id: item.userId, completed: completedCounter, uncompleted: uncompletedCounter}
      }
      if (item.userId != userId) {
        completedCounter = uncompletedCounter = 0;
        userId = item.userId;
        index++;
      }
    });
    resolve(userInfo);
  });
};

const getUsersToDoInfo = async () => {
  try {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => data.sort((a, b) => {
        return a.userId - b.userId;
      }));
    const userInfo = await parseUsersTodo(todos);

    return userInfo;
  } catch (e) {
    console.log(e);
  }
};

const drawUsersList = async () => {
  const todos = await getUsersToDoInfo();
  const ul = document.createElement('ul');
  ul.innerHTML = todos.map(_ => `<li>Пользователь userID=${_.id} имеет ${_.completed} завершенных и ${_.uncompleted} не завершенных заданий</li>`).join('');
  document.body.appendChild(ul);
};
drawUsersList();
