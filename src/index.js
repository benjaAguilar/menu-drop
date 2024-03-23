// eslint-disable-next-line no-unused-vars
import styles from './menuStyles.css';
import './test';
/*
const header = document.querySelector('.head');

const myMenu = {
  menuData: [
    {
      btnName: 'hover me',
      options: [
        { name: 'login', link: '#', id: 'login' },
        { name: 'setting', link: '#', id: 'settings' },
        { name: 'log out', link: '#', id: 'log-out' },
      ],
    },
    {
      btnName: 'more info',
      options: [
        { name: 'cart', link: '#', id: 'aaa' },
        { name: 'shop', link: '#', id: 'idk' },
        { name: 'about', link: '#', id: 'solid' },
      ],
    },
  ],
  event: 'hover' / 'click',
  color: '#facc15',
  optionsColor: '#422006'
};

dropMenu(myMenu, header);
*/

export default function dropMenu(menus, selector) {
  menus.menuData.forEach((menu) => {
    const trigger = document.createElement('div');
    const menuContent = document.createElement('div');
    const btn = document.createElement('button');

    btn.textContent = menu.btnName;

    menu.options.forEach((option) => {
      const a = document.createElement('a');

      a.textContent = option.name;
      a.setAttribute('href', option.link);
      a.setAttribute('id', option.id);
      a.classList.add('a-option');

      menuContent.appendChild(a);
    });

    trigger.classList.add('trigger');
    menuContent.classList.add('drop-menu-content');
    btn.classList.add('drop-menu-btn');

    // Selection betwenn hover or click
    if (menus.event === 'click') {
      let timeout;
      trigger.addEventListener('click', () => {
        function setTime() {
          timeout = setTimeout(() => {
            menuContent.style.display = 'none';
          }, '3000');
        }
        if (menuContent.style.display === 'block') {
          menuContent.style.display = 'none';
          clearTimeout(timeout);
        } else {
          menuContent.style.display = 'block';
          setTime();
        }
      });
    } else {
      trigger.addEventListener('mouseover', () => {
        menuContent.style.display = 'block';
      });

      trigger.addEventListener('mouseout', () => {
        menuContent.style.display = 'none';
      });
    }

    trigger.appendChild(btn);
    trigger.appendChild(menuContent);
    selector.appendChild(trigger);
  });

  if (menus.color !== undefined) {
    document.documentElement.style.setProperty('--custom-color', menus.color);
  }

  if (menus.optionsColor !== undefined) {
    document.documentElement.style.setProperty(
      '--options-color',
      menus.optionsColor,
    );
  }
}
