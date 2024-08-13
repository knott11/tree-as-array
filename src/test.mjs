// import { mapTree, filterTree, findTree, pushTree, unshiftTree, someTree, atTree,indexOfTree,popTree ,shiftTree} from './index.js'
import tree from './index.js'

const treee = [
  {
    name: 'parent 1',
    key: '0-0',
    children: [
      {
        name: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            name: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            name: 'leaf',
            key: '0-0-333-1',
          },
          {
            name: 'leaf',
            key: '0-0-444-1',
            children: [
              { name: 'qwe', key: '12e4wretg' }
            ]
          },
          {
            name: 'leaf',
            key: '0-0-555-1',
          },
        ],
      },
      {
        name: 'parent 1-1',
        key: '0-0-1',
        children: [{ name: 'leaf', key: '0-0-1-0' }, { name: 'leaffff', key: '0-0-bsdv1-0' }],
      },
    ],
  },
];

const re = tree.dedupTree(treee,'name' )
// const ree = atIndexOfTree(tree, re)
// console.log(JSON.stringify(tree), 'poi')
console.log(re)