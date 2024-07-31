/**
 * What will be the output?

 */
function f() {
  console.log(this); //
}

let user = {
  g: f.bind(null),
};

user.g();

/**
 * In Stric mode the output is null,
 * but in non-strict mode the output is window object
 */

/*
The context of a bound function is hard-fixed. There’s just no way to further change it.

So even while we run user.g(), the original function is called with this=null.
*/
