var cont = 1;
var todo = [
  {
    idCr: 1,
    idAs: 2,
    activity: "Wash the car",
    id: cont++
  }
]
var users = [
  {
    idUsers: 1,
    name: "Luca"
  },
  {
    idUsers: 2,
    name: "Mario"
  }
]
var todoStatus = [];


exports.ins = function (work) {
    work.id = cont++;
    todo.push(work);
    return "Activity added";
}

exports.del = function (id) {
  for (var i = 0; i < todo.length; i++) {
    if (id === todo[i].id) {
      todo.splice(i, 1);
      return "Activity deleted";
    }
  }
}

exports.completed = function (id) {
  for (var i = 0; i < todo.length; i++) {
    if (id === todo[i].id) {
        todo[i].status= true
        return "Update True"
      }
    }
  }

exports.notCompleted = function (id) {
  for (var i = 0; i < todo.length; i++) {
    if (id === todo[i].id) {
        todo[i].status= false
        return "Update False"
      }
    }
  }

exports.addUsers = function (user) {
  users.push(user);
  return "Users added";
}

exports.todoUser = function (id) {
  var userList = [];
  for (var i = 0; i < todo.length; i++) {
    if (id === todo[i].idCr || id === todo[i].idAs) {
      userList.push(todo[i]);
    }
  }
  return userList;
}

exports.allTodo = function () {
  return todo;
}
exports.allTrue = function () {
  var allTrue=[];
  for(var i=0; i<todo.length; i++)
  {
    if(todo[i].status===true)
    {
      allTrue.push(
        {
          id: todo[i].id,
          activity: todo[i].activity,
          status: todo[i].status
        }
      )
    }
  }
  return allTrue;
}

exports.allFalse = function () {
  var allFalse=[];
  for(var i=0; i<todo.length; i++)
  {
    if(todo[i].status===false)
    {
      allFalse.push(
        {
          id: todo[i].id,
          activity: todo[i].activity,
          status: todo[i].status
        }
      )
    }
  }
  return allFalse;
}

exports.allUsers = function () {
  return users;
}
