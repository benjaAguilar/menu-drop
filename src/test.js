// eslint-disable-next-line import/no-cycle
import dropMenu from './index';

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
  event: 'hover',
  color: '#facc15',
  optionsColor: '#94a3b8',
};

dropMenu(myMenu, header);
