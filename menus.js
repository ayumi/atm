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
        new Map([
          ['action', 'menu'],
          ['label', 'Select Language'],
          ['target', 'language-select']
        ]),
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
    'logout',
    new Map([
      ['content', '<h1>Transaction cancelled due to inactivity</h1>'],
      ['contentClass', 'vcenter wide'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]])
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
          ['label', 'The river'],
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
        ]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', "I don't believe in property"],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'def dao(): dao()'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'No hablo espanol'],
          ['target', 'language-select']
        ])
      ]]
    ])
  ],

  [
    'language-select',
    new Map([
      ['content', "<h3>Language De Change-o</h3>"],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'British'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Canadian'],
          ['target', 'account-entry']
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', "L33t"],
          ['target', 'last']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Braille'],
          ['target', 'account-entry']
        ]),
        new Map([['action', null]])
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
