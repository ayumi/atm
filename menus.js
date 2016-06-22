/*eslint-env es6 */

// Menu items
Atm.menus = new Map([
  [
    'index',
    [
      new Map([
        ['action', 'menu'],
        ['label', 'Menu 1'],
        ['target', 'menu1']
      ]),
      new Map([
        ['action', 'menu'],
        ['label', 'Menu 2'],
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
    ]
  ],

  [
    'menu1',
    [
      new Map([
        ['action', 'menu'],
        ['label', 'Back'],
        ['target', 'index']
      ])
    ]
  ],

  [
    'menu2',
    [
      new Map([
        ['action', 'menu'],
        ['label', 'Back'],
        ['target', 'index']
      ])
    ]
  ]
]);
