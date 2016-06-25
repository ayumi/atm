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
  ],
  [
    'inter-belief',
    () => {
      window.app.visitMenu('belief');
      setTimeout(window.app.visitMenu.bind(window.app), 7000, 'index');
    }
  ],
  [
    'inter-not-effective',
    () => {
      window.app.visitMenu('not-effective');
      setTimeout(window.app.visitMenu.bind(window.app), 3000, 'dao');
    }
  ],
  [
    'inquiry',
    () => {
      document.getElementById('content').innerHTML = '<p>Your balance: 0x' + Math.random().toString(16).substring(7) + '</p><b><b><p>Your outlook: Ask again later</p><b><b>Your bible verse: No, in all these things we are more than conquerors through him who loved us.</p>'
    }
  ],
  [
    'language-normcore',
    () => {
      window.app.langFn = Atm.lang.get('normcore');
      window.app.visitMenu('last');
    }
  ],
  [
    'language-cockney',
    () => {
      window.app.langFn = Atm.lang.get('cockney');
      window.app.visitMenu('last');
    }
  ],
  [
    'language-braille',
    () => {
      window.app.langFn = Atm.lang.get('braille');
      window.app.visitMenu('last');
    }
  ],
  [
    'language-l33t',
    () => {
      window.app.langFn = Atm.lang.get('leet');
      window.app.visitMenu('last');
    }
  ]
]);
