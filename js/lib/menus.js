/*eslint-env es6 */

// Menu items
Atm.menus = new Map([
  [
    'index',
    new Map([
      ['content', '<h1>{Welcome}</h1><h2>{To Priceless}</h2><p>{Please insert card for service}</p>'],
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
      ['content', '<h3>{Please explain why you don\'t have your card}</h3><br><br><p>{This will affect your credit score}</p>'],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Lost in the river'],
          ['target', 'account-fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Drunk'],
          ['target', 'alcohol']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'SWIM'],
          ['target', 'high']
        ]),
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', "I don't believe in property"],
          ['target', 'inter-belief']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Lost all my money in the DAO'],
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
          ['target', 'fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', '3-5'],
          ['target', 'fees-notice']
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', '5-8'],
          ['target', 'fees-notice']
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
      ['content', '<h2>{Give according to your ability and you will recieve in proportion to your need}</h2><br><br><p>{HINT: Requisition a card from your closest capitalist pig, they will acquiesce to authority}</p>'],
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

  // TODO: Show cool pics
  [
    'high',
    new Map([
      ['content', '<h2>{}</h2>'],
      ['contentClass', 'vcenter'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', '+/-'],
          ['target', 'fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', '+'],
          ['target', 'fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', '++'],
          ['target', 'fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', '+++'],
          ['target', 'fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', '++++'],
          ['target', 'fees-notice']
        ]),
      ]]
    ])
  ],

  [
    'inter-saving',
    new Map([
      ['content', '<h2>{Saving your preferences}</h2>'],
      ['contentClass', 'vcenter'],
      ['options', []]
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
          ['target', 'fees-notice']
        ]),
      ]]
    ])
  ],
  [
    'main-menu',
    new Map([
      ['content', '<h2>{Please choose an action}</h2>'],
      ['options', [
        new Map([
          ['action', 'menu'],
          ['label', 'Withdraw'],
          ['target', 'brexit']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Bible inquiry'],
          ['target', 'bible']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Balance Inquiry'],
          ['target', 'fees-notice']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Inquiry'],
          ['target', 'inquiry']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Talk to customer support'],
          ['target', 'change-menu']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Change life'],
          ['target', 'change-menu']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Disco mode'],
          ['target', 'disco']
        ])
      ]],
      ['onloadFn', 'main-menu-init']
    ])
  ],
  [
    'bible',
    new Map([
      ['content', '<h3>Followers: <span id="score">0</span></h3><div id="verse"></div>'],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', 'Tithe'],
          ['target', 'bible']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Pray harder'],
          ['target', 'bible']
        ]),
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', 'Open an abbey and brew beer'],
          ['target', 'bible']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Eat a holy cracker'],
          ['target', 'bible']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Renounce faith'],
          ['target', 'main-menu']
        ])
      ]],
      ['onloadFn', 'bible']
    ])
  ],
  [
    'disco',
    new Map([
      ['content', '<div class="rainbow" id="rainbow"><div class="rainbow rainbow2" id="rainbow"></div>'],
      ['contentClass', 'wide tall'],
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
          ['label', 'Take a break'],
          ['target', 'main-menu']
        ])
      ]],
      ['onloadFn', 'disco']
    ])
  ],
  [
    'fees-notice',
    new Map([
      ['content', '<p>{The operator of this banking machine will charge a fee of:}</p><p>{$6.00 for this transaction.}</p><p>{This fee is in addition to the average $340 per year credit card companies make off merchant fees per American}</p>'],
      ['options', [
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'No thanks'],
          ['target', null]
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Please do it gently'],
          ['target', 'main-menu']
        ])
      ]]
    ])
  ],
  [
    'change-menu',
    new Map([
      ['content', '<h3>{What will you change?}</h3>'],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'menu'],
          ['label', 'Money'],
          ['target', 'account-fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Pin'],
          ['target', 'account-fees-notice']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Alignment'],
          ['target', 'account-fees-notice']
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
          ['target', 'account-fees-notice']
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
    'brexit',
    new Map([
      ['content', '<h2>{How do you feel about Brexit?}</h2>'],
      ['options', [
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', 'I pretend to have an opinion so I appear smart'],
          ['target', 'inter-saving']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'I\'m an American, hence I couldn\'t care less'],
          ['target', 'inter-saving']
        ]),
        new Map([['action', null]]),
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', 'I went to England on vacation once, so I\'m actually an expert'],
          ['target', 'inter-saving']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'What the hell is Brexit'],
          ['target', 'inter-saving']
        ]),
        new Map([
          ['action', 'menu'],
          ['label', 'Brexit back to the main menu'],
          ['target', 'main-menu']
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
        new Map([['action', null]]),
        new Map([
          ['action', 'fn'],
          ['label', 'L33t'],
          ['target', 'language-l33t']
        ]),
        new Map([
          ['action', 'fn'],
          ['label', 'Normcore'],
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
