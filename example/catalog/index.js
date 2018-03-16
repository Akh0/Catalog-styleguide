import React from 'react';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';

const pages = [
    {path: '/', title: 'Welcome', component: require('./pages/WELCOME.md')},
    {path: '/color-palette', title: 'Color Palette', component: require('./pages/COLOR-PALETTE.md')},
    {path: '/typography', title: 'Typography', component: require('./pages/TYPOGRAPHY.md')},
    {path: '/grid', title: 'Grid', component: require('./pages/GRID.md')},
    {path: '/buttons', title: 'Buttons', component: require('./pages/BUTTONS.md')},
    {path: '/card', title: 'Card', component: require('./pages/CARD.md')}
];

ReactDOM.render(
  <Catalog title='Catalog' pages={pages} />,
  document.getElementById('catalog')
);
