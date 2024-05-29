import { mapTree, filterTree, findTree, pushTree, unshiftTree, someTree, atTree,indexOfTree } from './index.js'

const tree = [
  {
    name: 'parent 1',
    id: '0-0',
    children: [
      {
        name: 'parent 1-0',
        id: '0-0-0',
        disabled: true,
        children: [
          {
            name: 'leaf',
            id: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            name: 'leaf',
            id: '0-0-333-1',
          },
          {
            name: 'leaf',
            id: '0-0-444-1',
            children: [
              { name: 'qwe', id: '12e4wretg' }
            ]
          },
          {
            name: 'leaf',
            id: '0-0-555-1',
          },
        ],
      },
      {
        name: 'parent 1-1',
        id: '0-0-1',
        children: [{ name: 'leaf', id: '0-0-1-0' }],
      },
    ],
  },
];

const re = indexOfTree(tree, '12e4wreeetg')
console.log(re, 'poi')
