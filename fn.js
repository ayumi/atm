/*eslint-env es6 */

// Functions called from menus
Atm.fn = new Map([
  [
    'hello-world',
    () => {
      document.getElementById('content').innerText = 'HELLO WORLD!!!';
    }
  ],
  [
    'nyan-cat',
    () => {
      document.getElementById('content').innerHTML = '<img src="/nyan-cat-coin.gif"/>';
    }
  ]
]);
