var assert = require('assert');
var list = require('./index.js');

describe('TEST TO DO LIST', function () {
    it('add work, value ID Creator, Assignee and lenght todo',
        function () {
            list.ins({ idCr: 3, idAs: 4, activity: "Wash the car" });
            assert.equal(list.allTodo()[1].idCr, 3);
            assert.equal(list.allTodo()[1].idAs, 4);
            assert.equal(list.allTodo().length, 2);
        });
    it('id exist, set true',
        function () {
            assert.equal(list.completed(1),"Update True");

        });
        it('id exist, set false',
        function () {
            assert.equal(list.notCompleted(2),"Update False");
        });
        it('all true, lenght 1',
        function () {
            assert.equal(list.allTrue().length,1);
        });
        it('all false, lenght 1',
        function () {
            assert.equal(list.allFalse().length,1);
        });

        it('add users, lenght 2',
        function () {
            list.addUsers({ idUsers: 3, Name: "Giuseppe" });
            assert.equal(list.allUsers().length,3);

        });
        it('list todo  of a single users, lenght 2',
        function () {
            assert.equal(list.todoUser(3).length,1);

        });
        it('id exist, del work, lenght 1',
        function () {
            list.del(1);
            assert.equal(list.allTodo().length, 1);

        });


});
