console.log('hello TypeScript');
var a;
// a = 13;
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456);
var gender;
gender = 'male';
var aa;
var bb;
bb = '123';
if (typeof bb === 'string') {
    aa = bb;
}
aa = bb;
aa = bb;
var obj = { name: 'sss' };
var fun;
fun = function (n1, n2) {
    return n1 + n2;
};
var obj2;
obj2 = { name: 'hihi', gender: 'male' };
var arr;
arr = ['aaaa'];
var arr2;
arr2 = ['aaa'];
var arr3;
arr3 = ['aaa', 123];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'aaa',
    gender: Gender.Male
};
var cc = 12;
