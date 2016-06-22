/*eslint-env es6 */

Atm.App = class {
  constructor (args) {
    this.menus = args.menus;
    this.menuMax = args.menuMax;
    this.init();
  }

  init () {
    this.initMenuActions();
    this.initMenuHotkeys();
    this.activeMenuId = null;
    this.visitMenu('index');
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
      // Hardcoded to F keys. keyCode of F1 is 112
      let index = event.keyCode - 112;
      let menuEvent = new Event('click');
      this.getMenuElByIndex(index).dispatchEvent(menuEvent);
    });
  }

  menuPressed (index) {
    let menu = this.getActiveMenu()[index];
    let action = menu.get('action');
    let target = menu.get('target');
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
    this.activeMenuId = menuId;
    let i = 0;
    let menuOptions = this.menus.get(menuId);
    for (let menu of menuOptions) {
      if (menu.get('action') === null) {
        this.setMenuVisibility(i, 'hidden');
      } else {
        let el = this.getMenuElByIndex(i);
        el.innerText = menu.get('label');
        this.setMenuVisibility(i, 'visible');
      }
      i++;
    }
    for (; i < this.menuMax; i++) {
      this.setMenuVisibility(i, 'hidden');
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
