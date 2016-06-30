/*eslint-env es6 */

Atm.App = class {
  constructor (args) {
    this.menus = args.menus;
    this.menuMax = args.menuMax;
  }

  init () {
    this.el = {
      content: document.getElementById('content')
    };
    this.audio = {
      beep: new Audio('sounds/beep.mp3')
    };

    this.initMenuActions();
    this.initMenuHotkeys();
    this.initInactivityTimer();

    // document.body.style.cursor = 'none';

    var f = new FontFace("braille", "url(fonts/braille/BRAILLE1.ttf)", {});
    f.load().then(function (loadedFace) {
      document.fonts.add(loadedFace);
    });

    var f = new FontFace("vt323", "url(fonts/vt323/vt323-regular.ttf)", {});
    f.load().then(function (loadedFace) {
      document.fonts.add(loadedFace);
      this.setFont("vt323");
    }.bind(this));

    this.lang = Atm.lang.get('normcore');
    this.activeMenuId = null;
    this.visitMenu('index');
  }

  setFont (font) {
    document.body.style.fontFamily = font;
    for (let i = 0; i < this.menuMax; i++) {
      this.getMenuElByIndex(i).style.fontFamily = font;
    }
  }

  logout () {
    if (this.activeMenuId !== 'index') {
      this.visitMenu('logout');
      this.lang = Atm.lang.get('normcore');
      this.setFont("vt323");
      setTimeout(this.visitMenu.bind(this), 3000, 'index')
    }
  }

  beep () {
    this.audio.beep.currentTime = 0;
    this.audio.beep.play();
  }

  resetInactivityTimer() {
    // TODO: Reenable
    return;
    clearTimeout(this.inactivityTimer)
    this.inactivityTimer = setTimeout(this.logout.bind(this), 30000);
  }

  initInactivityTimer () {
    this.inactivityTimer = null;
    document.body.addEventListener('load', this.resetInactivityTimer.bind(this));
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
      if (menuOption && this.isElVisible(menuOption)) {
        menuOption.dispatchEvent(menuEvent);
      }
    });
  }

  menuPressed (index) {
    let buttan = this.getMenuElByIndex(index);
    buttan.className = 'menu pressed';
    this.beep();
    setTimeout(this.menuPressedAction.bind(this), 400, index);
  }

  menuPressedAction (index) {
    let options = this.getActiveMenu().get('options')[index];
    let action = options.get('action');
    let target = options.get('target');
    if (target === null) {
      return;
    }
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
    let action, el, elLabel, option, visibility;

    let content = menu.get('content');
    this.el.content.innerHTML = this.localize(content);
    let contentClass = menu.get('contentClass');
    this.el.content.className = `content ${contentClass}`;

    let menuOptions = menu.get('options');
    for (let i = 0; i < this.menuMax; i++) {
      option = menuOptions[i];
      if (option) {
        action = option.get('action')
      }
      el = this.getMenuElByIndex(i);
      el.className = 'menu';
      if (option && action) {
        elLabel = option.get('label');
        el.innerText = this.localize(`{${elLabel}}`);
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

  isElVisible (el) {
    return el.style.visibility === 'visible';
  }

  setMenuVisibility (index, visibility) {
    return this.getMenuElByIndex(index).style.visibility = visibility;
  }

  // Localize menu content by interpolatig {}
  localize (string) {
    return string.replace(/\{(.*?)\}/g, this.lang.fn);
  }
};

window.app = new Atm.App({
  menus: Atm.menus,
  menuMax: 8
});
window.app.init();
