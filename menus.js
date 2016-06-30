/*eslint-env es6 */

// Menu items
Atm.menus = new Map([
  [
    'index',
    new Map([
      ['content', '<h1>{Welcome}</h1><h2>{To Priceless}</h2><p>{Please insert card for service"}</p>'],
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
      ['content', '<h2>{Transaction cancelled due to inactivity}</h2>'],
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
      ['content', '<h3>{("Please explain why you don\'t have your card}</h3><br><br><p>{This will affect your credit score}</p>'],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'I lost it in the river'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Alcohol is a bitch'],
          ['target', 'alcohol']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'I blame SWIM'],
          ['target', 'high']
        ]),
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', "I don't believe in property rights"],
          ['target', 'inter-belief']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'I invested all my money in the DAO'],
          ['target', 'dao']
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
    'alcohol',
    new Map([
      ['content', '<h2>{How many drinks did you have?}</h2>'],
      ['contentClass', 'wide'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', '1-2'],
          ['target', 'dao']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', '3-5'],
          ['target', 'dao']
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', '5-8'],
          ['target', 'dao']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', '8+'],
          ['target', '8drinks']
        ])
      ]]
    ])
  ],
  [
    'belief',
    new Map([
      ['content', '<h2>{Give according to your ability and you will recieve in proportion to your need</h2><br><br><p>HINT: Requisition a card from your closest capitalist pig, they will acquiesce to authority}</p>'],
      ['contentClass', 'vcenter'],
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
    'high',
    new Map([
      ['content', '<h2>{Please enter SWIMs level on a scale of 10 on the keypad in place of your pin.}</h2><br><br><input type="text" name="fname">'],
      ['contentClass', 'vcenter'],
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
    'not-effective',
    new Map([
      ['content', '<h2>{It\'s not very effective...}</h2>'],
      ['contentClass', 'vcenter'],
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
    'dao',
    new Map([
      ['content', '<h2>{daoattacker offers you 1 million eth to oppose forks}</h2>'],
      ['contentClass', 'vcenter'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', 'Counter-attack'],
          ['target', 'inter-not-effective']
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Accept'],
          ['target', 'main-menu']
        ]),
      ]]
    ])
  ],
  [
    'main-menu',
    new Map([
      ['content', '<h3>{Please choose an option}</h3>'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Withdrawal'],
          ['target', 'fees-notice']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Inquiry'],
          ['target', 'inquery']
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', "Change"],
          ['target', 'change-menu']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Services'],
          ['target', 'account-entry']
        ])
      ]]
    ])
  ],

  [
    'fees-notice',
    new Map([
      ['content', '<h3>{ The operator of this ATM machine will charge a fee of $6:00 per transaction in addition to the average $340:00 that credit card companies make off merchant fees per American}</h3>'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', "Cancel"],
          ['target', 'fees-notice']
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Please do it gently'],
          ['target', 'last']
        ])
      ]]
    ])
  ],
  [
    'change-menu',
    new Map([
      ['content', '<h3>{Please choose the setting to change}</h3>'],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Pin'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Alignment'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Account balance'],
          ['target', 'account-entry']
        ]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', "Language"],
          ['target', 'language-select']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Sexuality'],
          ['target', 'account-entry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Gender'],
          ['target', 'index']
        ])
      ]]
    ])
  ],
  [
    'language-select',
    new Map([
      ['content', '<h3>{Language De Change-o}</h3>'],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', 'L33t'],
          ['target', 'language-l33t']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Cockney'],
          ['target', 'language-cockney']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Norecore'],
          ['target', 'language-normcore']
        ]),
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', "Canadian"],
          ['target', 'language-canadian']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Braille'],
          ['target', 'language-braille']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Back'],
          ['target', 'last']
        ])
      ]]
    ])
  ],
  [
    'account-entry',
    new Map([
      ['content', '<h2>{Card reader malfunction}</h2>'],
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
