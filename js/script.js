//<---1--->
//Перепишіть функцію, використовуючи '?' або '||' ('?' - тернарний оператор; '||' - АБО )
/*function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Батьки дозволили?');
}
}*/

///1)
/*function checkAge(age) {
    
    return age > 18 || confirm('Батьки дозволили?');
    }
checkAge(13);*/

///2)
/*function checkAge(age) {
    return age > 18 ? true: confirm('Батьки дозволили?'); // не завтикувати писати true:!!!
    }
checkAge(13);*/


//<---2--->
//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
/*function min(a, b){
    return a < b ? a : b;
}
console.log(min(5, 10)); // виведеться а
console.log(min(10, 5)); // виведеться b */


//<---3--->
//Перепишіть з використанням стрілкових функцій
//Замініть Функціональні Вирази на стрілкові функції у коді нижче:
//function ask(question, yes, no) {
//if (confirm(question)) yes();
//else no();
//}
//ask(
//"Ви згодні?"
//,
//function() { alert("Ви погодились."); },
//function() { alert("Ви скасували виконання."); }
//);

/*let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};
ask( "Ви згодні?",
() => alert("Ви погодились."), // коли є декілька варіків, ми НЕ ставимо ";" ! 
()=> alert("Ви скасували виконання.")
); */