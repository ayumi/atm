/*eslint-env es6 */

// Menu items
Atm.menus = new Map([
  [
    'index',
    new Map([
      ['content', '<h1>main menu</h1>'],
      ['options', [
        new Map([
          ['action', 'menu'],
          ['label', 'Door #1'],
          ['target', 'menu1']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Door #2'],
          ['target', 'menu2']
        ]),
        new Map([
          ['action', null]
        ]),
        new Map([
          ['action', null]
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Say hi to the world'],
          ['target', 'hello-world']
        ])
      ]]
    ])
  ],

  [
    'menu1',
    new Map([
      ['content', '<h2>menu1</h2>'],
      ['options', [
        new Map([
          ['action', 'menu'],
          ['label', 'Back'],
          ['target', 'index']
        ])
      ]]
    ])
  ],

  [
    'menu2',
    new Map([
      ['content', '<h2>menu2</h2>'],
      ['options', [
        new Map([
          ['action', 'menu'],
          ['label', 'Back'],
          ['target', 'index']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Withdraw kawaii'],
          ['target', 'nyan-cat']
        ])
      ]]
    ])
  ]
]);
