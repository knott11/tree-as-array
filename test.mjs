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

function atIndexOfTree(tree, path) {  
  function traverse(nodes, indexPath) {  
      if (!nodes || indexPath.length === 0) {  
          return null;  
      }  

      const index = indexPath[0];  
      const currentNode = nodes[index];  

      if (!currentNode) {  
          return null;  
      }  

      if (indexPath.length === 1) {  
          return currentNode;  
      }  

      if (currentNode.children) {  
          return traverse(currentNode.children, indexPath.slice(1));  
      }  

      return null;  
  }  

  return traverse(tree, path);  
}

const re = indexOfTree(tree, '0-0-1-0')
const ree = atIndexOfTree(tree, re)
console.log(ree, 'poi')