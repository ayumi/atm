/*eslint-env es6 */

Atm.App = class {
  constructor (args) {
    this.menus = args.menus;
    this.menuMax = args.menuMax;
    this.init();
  }

  init () {
    this.el = {
      content: document.getElementById('content')
    };

    this.initMenuActions();
    this.initMenuHotkeys();
    this.initInactivityTimer();

    document.body.addEventListener('click', this.onKeyPress.bind(this));
    document.body.addEventListener('keypress', this.onKeyPress.bind(this));
    document.body.style.cursor = 'none';

    this.langFn = Atm.lang.get('normcore');
    this.activeMenuId = null;
    this.visitMenu('index');
  }

  logout () {
    if (this.activeMenuId !== 'index') {
      this.visitMenu('logout');
      this.langFn = Atm.lang.get('normcore');
      setTimeout(this.visitMenu.bind(this), 3000, 'index')
    }
  }

  onKeyPress () {
    let audio = new Audio('sounds/beep.mp3');
    audio.play();
    this.resetInactivityTimer();
  }

  resetInactivityTimer() {
    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(this.logout.bind(this), 30000);
  }

  initInactivityTimer () {
    this.inactivityTimer = null;
    document.body.addEventListener('load', this.resetInactivityTimer.bind(this));
    document.body.addEventListener('mousemove', this.resetInactivityTimer.bind(this));
    this.resetInactivityTimer();
  }

  initMenuActions () {
    for (let i = 0; i < this.menuMax; i++) {
      let el = this.getMenuElByIndex(i);
      let thisI = i;
      el.addEventListener('click', () => {
        window.app.menuPressed(thisI);
      });
    }
  }

  initMenuHotkeys () {
    document.body.addEventListener('keydown', (event) => {
      // ATM menu keys are "a"-"h"
      // keyCode of "a" is 66
      let index = event.keyCode - 65;
      let menuEvent = new Event('click');
      let menuOption = this.getMenuElByIndex(index);
      if (menuOption) {
        menuOption.dispatchEvent(menuEvent);
      }
    });
  }

  menuPressed (index) {
    let buttan = this.getMenuElByIndex(index);
    buttan.className = 'menu pressed';
    setTimeout(this.menuPressedAction.bind(this), 400, index);
  }

  menuPressedAction (index) {
    let options = this.getActiveMenu().get('options')[index];
    let action = options.get('action');
    let target = options.get('target');
    switch (action) {
      case 'menu':
        this.visitMenu(target);
        break;
      case 'fn':
        Atm.fn.get(target)();
        break;
      default:
        console.log('not implemented!');
    }
  }

  // Return Array of menu options
  getActiveMenu () {
    return this.menus.get(this.activeMenuId);
  }

  visitMenu (menuId) {
    if (menuId === 'last') {
      menuId = this.lastMenuId;
    }
    this.lastMenuId = this.activeMenuId;
    this.activeMenuId = menuId;
    // Update content
    let menu = this.menus.get(menuId);
    this.renderMenu(menu);
  }

  renderMenu (menu) {
    let action, el, option, visibility;

    // Interpolate fns in content templates, e.g. for languages
    let contentLiteral = "`" + menu.get('content') + "`";
    this.el.content.innerHTML = eval(contentLiteral);
    let contentClass = menu.get('contentClass');
    this.el.content.className = `content ${contentClass}`;

    let menuOptions = menu.get('options');
    for (let i = 0; i < this.menuMax; i++) {
      option = menuOptions[i];
      if (option) {
        action = option.get('action')
      }
      if (option && action) {
        el = this.getMenuElByIndex(i);
        el.innerText = option.get('label');
        el.className = 'menu';
        visibility = 'visible';
      } else {
        visibility = 'hidden';
      }
      this.setMenuVisibility(i, visibility);
    }
  }

  getMenuElByIndex (index) {
    return document.getElementById(`menu-${index}`);
  }

  setMenuVisibility (index, visibility) {
    return this.getMenuElByIndex(index).style.visibility = visibility;
  }
};

window.app = new Atm.App({
  menus: Atm.menus,
  menuMax: 8
});
