import { mapTree, filterTree, findTree, pushTree, unshiftTree, someTree, atTree,treeDepthMap } from './index.js'

const tree = [  
  {  
    name: 'Root',  
    id: '0',  
    children: [  
      {  
        name: 'Level 1 - Node 1',  
        id: '0-0',  
        children: [  
          {  
            name: 'Level 2 - Node 1',  
            id: '0-0-0',  
            children: [  
              {  
                name: 'Level 3 - Node 1',  
                id: '0-0-0-0',  
                children: [  
                  {  
                    name: 'Level 4 - Node 1',  
                    id: '0-0-0-0-0',  
                    children: [  
                      {  
                        name: 'Level 5 - Leaf',  
                        id: '0-0-0-0-0-0',  
                        children: []  
                      }  
                    ]  
                  },{
                    name:'12wqe',
                    id:'342'
                  }
                ]  
              }  
            ]  
          }  
        ]  
      },  
      {  
        name: 'Level 1 - Node 2',  
        id: '0-1',  
        children: [  
          {  
            name: 'Level 2 - Node 2',  
            id: '0-1-0',  
            children: [  
              {  
                name: 'Level 3 - Node 2',  
                id: '0-1-0-0',  
                children: [  
                  {  
                    name: 'Level 4 - Node 2',  
                    id: '0-1-0-0-0',  
                    children: [  
                      {  
                        name: 'Level 5 - Node 2',  
                        id: '0-1-0-0-0-0',  
                        children: [  
                          {  
                            name: 'Level 6 - Leaf',  
                            id: '0-1-0-0-0-0-0',  
                            children: []  
                          }  
                        ]  
                      }  
                    ]  
                  }  
                ]  
              }  
            ]  
          }  
        ]  
      }  
    ]  
  }  
];

const re = treeDepthMap(tree)
console.log(re, 'poi')
