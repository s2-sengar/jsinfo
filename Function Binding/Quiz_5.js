/*

The task is a little more complex variant of Fix a function that loses "this".

The user object was modified. Now instead of two functions loginOk/loginFail, it has a single function user.login(true/false).

What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

*/

function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

// askPassword(?, ?); // ?

askPassword(user.login.bind(user, true), user.login.bind(user, false));

/*
    Either use a wrapper function, an arrow to be concise:
        askPassword(() => user.login(true), () => user.login(false));
    Now it gets user from outer variables and runs it the normal way.

    Or create a partial function from user.login that uses user as the context and has the correct first argument:
        askPassword(user.login.bind(user, true), user.login.bind(user, false));
*/
