#### 介绍
用数组的方法操作树形结构数据。目前已支持mapTree、filterTree、findTree、pushTree、unshiftTree、popTree、shiftTree、someTree、everyTree、atTree、indexOfTree和特殊方法atIndexOfTree、nodeDepthMap和dedupTree。每个方法的最后一个参数可以自定义children和id的属性名。

#### 安装教程
```bash
yarn add tree-as-array
npm i tree-as-array
```

#### 使用说明
引入
```bash
import tree from 'tree-as-array'
```

示例数据
```bash
const treeData = [
      {
        name: 'parent 1',
        id: '0-0',
        children: [
          {
            name: 'parent 1-0',
            id: '0-0-0',
            children: [
              {
                name: 'leaf',
                id: '0-0-0-0',
              },
              {
                name: 'leaf',
                id: '0-0-333-1',
              },
              {
                name: 'leaf',
                id: '0-0-444-1',
              },
            ],
          },
          {
            name: 'parent 1-1',
            id: '0-0-1',
            children: [{ name: 'leaf', id: '0-0-1-0', children: [{ name: 'qqqqq', id: '123124' }] }],
          },
        ],
      },
    ];
```

mapTree（遍历树结构数据的方法）
```bash
tree.mapTree(treeData, (item) => {
    console.log(item)
})
```

filterTree
```bash
const result = tree.filterTree(treeData, (item) => {
    return item.id !== 2
})
 
console.log(result)
```

findTree
```bash
const result = tree.findTree(treeData, (item) => {
    return item.id !== 2
})
 
console.log(result)
```

pushTree（targetParentId为目标节点的id，newNode为往该节点添加的数据）
```bash
tree.pushTree(treeData, targetParentId, newNode);

console.log(treeData)
```

unshiftTree（targetParentId为目标节点的id，newNode为往该节点添加的数据）
```bash
tree.unshiftTree(treeData, targetParentId, newNode);

console.log(treeData)
```

popTree（rootId为目标节点的id，此方法可删除rootId下的最后一个子节点）
```bash
tree.popTree(treeData, rootId);

console.log(treeData)
```

shiftTree（rootId为目标节点的id，此方法可删除rootId下的第一个子节点）
```bash
tree.shiftTree(treeData, rootId);

console.log(treeData)
```

someTree
```bash
const result = tree.someTree(treeData, item => item.name === 'jack')

console.log(result)
```

everyTree
```bash
const result = tree.everyTree(treeData, item => item.age >= 18)

console.log(result)
```

atTree（parentId为指定父节点的id，nodeIndex为子节点的索引，可传负数，和数组的at方法一样）
```bash
const result = tree.atTree(treeData, parentId, nodeIndex)

console.log(result)
```

indexOfTree（返回一个数组，值为从根节点开始到targetId所在节点的索引）
```bash
const result = tree.indexOfTree(treeData, targetId)

console.log(result)
```

atIndexOfTree（传入节点数据的下标数组，返回节点数据）
```bash
const result = tree.atIndexOfTree(treeData, [0, 1, 0])

console.log(result)
```

nodeDepthMap（返回一个字典，键代表节点的id，值代表该节点在数据的第几层）
```bash
const result = tree.nodeDepthMap(treeData)

console.log(result)
```

dedupTree（树结构对象数组去重方法，第一个参数为需要去重的数据，第二个参数为以哪个键去重）
```bash
const result = tree.dedupTree(treeData, 'id')

console.log(result)
```