/*

Can we change this by additional binding?

What will be the output?

*/

function f() {
  console.log(this.name);
}

// f = f.bind({ name: 'John' }).bind({ name: 'Ann' });
f = f.bind({ name: 'John' });
f = f.bind({ name: 'Ann' });

f(); // ? -> Ann X wrong answer

/** 
    The exotic bound function object returned by f.bind(...) remembers the context (and arguments if provided) only at creation time.
    A function cannot be re-bound.
 */
