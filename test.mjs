import { mapTree, filterTree, findTree, pushTree, unshiftTree, someTree,atTree } from './index.js'

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
              id: '0-0-0-1',
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
 const re = atTree(tree,'0-0',1)
  console.log(re, 'poi')
  