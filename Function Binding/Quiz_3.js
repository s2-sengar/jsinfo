/* There’s a value in the property of a function. Will it change after bind? Why, or why not?*/

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'John',
});

console.log(bound.test); // what will be the output? why? -> undefined

/* 
    The answer: undefined.
    The result of bind is another object. It does not have the test property. 
*/
