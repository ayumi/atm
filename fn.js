/*eslint-env es6 */

// Functions called from menus
Atm.fn = new Map([
  [
    'hello-world',
    () => {
      document.getElementById('content').innerText = 'HELLO WORLD!!!';
    }
  ]
]);
