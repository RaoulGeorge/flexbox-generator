export const ACTIONS = [
  { property: 'flex-direction', options: ['row', 'row-reverse', 'column', 'column-reverse'], selected: 'row' },
  { property: 'flex-wrap', options: ['nowrap', 'wrap', 'wrap-reverse'], selected: 'row' },
  {
    property: 'justify-content',
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    selected: 'row',
  },
  { property: 'align-items', options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'], selected: 'row' },
  {
    property: 'align-content',
    selected: 'row',
    options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  },
];
