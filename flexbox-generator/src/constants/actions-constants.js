export const ACTIONS = [
  { property: 'flex-direction', options: ['row', 'row-reverse', 'column', 'column-reverse'], selected: 'row' },
  { property: 'flex-wrap', options: ['nowrap', 'wrap', 'wrap-reverse'], selected: 'nowrap' },
  {
    property: 'justify-content',
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    selected: 'flex-start',
  },
  {
    property: 'align-items',
    options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
    selected: 'stretch',
  },
  {
    property: 'align-content',
    selected: 'flex-start',
    options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  },
];
