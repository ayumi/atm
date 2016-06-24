/*eslint-env es6 */

// Menu items
Atm.menus = new Map([
  [
    'index',
    new Map([
      ['content', '<h1>Welcome</h1><h2>To Priceless</h2><p>Please insert card for service'],
      ['contentClass', 'wide'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Forgot Card'],
          ['target', 'forgot-card']
        ])
      ]]
    ])
  ],

  [
    'forgot-card',
    new Map([
      ['content', "<h3>Please explain why you don't have your card</h3><br><br><p>This will affect your credit score</p>"],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Forgetful'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Relying on partner to save money'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Was a term of your plea bargain avoiding jail for financial crimes'],
          ['target', 'account-entry']
        ]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Lost in the river'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Drunk'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'High'],
          ['target', 'account-entry']
        ])
      ]]
    ])
  ],

  [
    'account-entry',
    new Map([
      ['content', '<h2>Card reader malfunction</h2>'],
      ['options', [
        new Map([
          ['action', 'menu'],
          ['label', 'Back'],
          ['target', 'index']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'kawaii'],
          ['target', 'nyan-cat']
        ])
      ]]
    ])
  ]
]);
