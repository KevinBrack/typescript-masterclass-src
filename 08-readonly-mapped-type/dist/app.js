var person = {
    name: 'Kevin',
    age: 38
};
function freeze(obj) {
    return Object.freeze(obj);
}
var newPerson = freeze(person);
// newPerson.age = 100000; // Throws error
