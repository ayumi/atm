/*eslint-env es6 */

// Language functions.
// Each function should implement String.replace newSubStr str/functions.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Atm.lang = new Map([
  [
    'braille',
    {
      fn: (_, str) => {
        return str.translate(this.mapping);
      },
      mapping: [
        ['1',   '⠼⠁'],
        ['2',   '⠼⠃'],
        ['3',   '⠼⠉'],
        ['4',   '⠼⠙'],
        ['5',   '⠼⠑'],
        ['6',   '⠼⠋'],
        ['7',   '⠼⠛'],
        ['8',   '⠼⠓'],
        ['9',   '⠼⠊'],
        ['0',   '⠼⠚'],

        ['A',   '⠠⠁'],
        ['B',   '⠠⠃'],
        ['C',   '⠠⠉'],
        ['D',   '⠠⠙'],
        ['E',   '⠠⠑'],
        ['F',   '⠠⠋'],
        ['G',   '⠠⠛'],
        ['H',   '⠠⠓'],
        ['I',   '⠠⠊'],
        ['J',   '⠠⠚'],
        ['K',   '⠠⠅'],
        ['L',   '⠠⠇'],
        ['M',   '⠠⠍'],
        ['N',   '⠠⠝'],
        ['O',   '⠠⠕'],
        ['P',   '⠠⠏'],
        ['Q',   '⠠⠟'],
        ['R',   '⠠⠗'],
        ['S',   '⠠⠎'],
        ['T',   '⠠⠞'],
        ['U',   '⠠⠥'],
        ['V',   '⠠⠧'],
        ['W',   '⠠⠺'],
        ['X',   '⠠⠭'],
        ['Y',   '⠠⠽'],
        ['Z',   '⠠⠵'],

        ['a',   '⠁'],
        ['b',   '⠃'],
        ['c',   '⠉'],
        ['d',   '⠙'],
        ['e',   '⠑'],
        ['f',   '⠋'],
        ['g',   '⠛'],
        ['h',   '⠓'],
        ['i',   '⠊'],
        ['j',   '⠚'],
        ['k',   '⠅'],
        ['l',   '⠇'],
        ['m',   '⠍'],
        ['n',   '⠝'],
        ['o',   '⠕'],
        ['p',   '⠏'],
        ['q',   '⠟'],
        ['r',   '⠗'],
        ['s',   '⠎'],
        ['t',   '⠞'],
        ['u',   '⠥'],
        ['v',   '⠧'],
        ['w',   '⠺'],
        ['x',   '⠭'],
        ['y',   '⠽'],
        ['z',   '⠵'],

        ['\\.', '⠲'],
        [',',   '⠂'],
        ['\\?', '⠦'],
        [';',   '⠆'],
        ['!',   '⠖'],
        ['<',   '⠦'],
        ['>',   '⠴'],
        ['\\[', '⠶'],
        ['-',   '⠤'],
        ["'",   '⠄'],
      ]
    }
  ],

  [
    'canadian',
    {
      fn: (_, str) => {
        return str + ', eh?';
      }
    }
  ],

  [
    'leet',
    {
      fn: (_, str) => {
        return str.replace(/[a-z]/g, Atm.lang.get('leet').mapping);
      },
      mapping: (a) => {
        return "4BCD3F6H1JKLMN0PQR57"[parseInt(a, 36)-10] || a.replace(/[a-t]/gi, Atm.lang.get('leet').mapping);
      }
    }
  ],

  [
    'normcore',
    {
      fn: '$1'
    }
  ]
]);
