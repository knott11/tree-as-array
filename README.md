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
import t from 'tree-as-array'
```

mapTree（遍历树结构数据的方法）
```bash
t.mapTree(treeData, (item) => {
    console.log(item)
})
```

filterTree（树结构数据的filter方法）
```bash
const values = ['node1', 'node2','node3'];
const result = t.filterTree(treeData, (item) => {
    return values.includes(item.name)
})
 
console.log(result)
```

findTree（树结构数据的find方法）
```bash
const result = t.findTree(treeData, (item) => {
    return item.hasOwnProperty('children')
})
 
console.log(result)
```

pushTree（targetParentId为目标节点的id，newNode为往该节点添加的数据）
```bash
t.pushTree(treeData, targetParentId, newNode);

console.log(treeData)
```

unshiftTree（targetParentId为目标节点的id，newNode为往该节点添加的数据）
```bash
t.unshiftTree(treeData, targetParentId, newNode);

console.log(treeData)
```

popTree（rootId为目标节点的id，此方法可删除rootId下的最后一个子节点）
```bash
t.popTree(treeData, rootId);

console.log(treeData)
```

shiftTree（rootId为目标节点的id，此方法可删除rootId下的第一个子节点）
```bash
t.shiftTree(treeData, rootId);

console.log(treeData)
```

someTree（树结构数据的some方法）
```bash
const result = t.someTree(treeData, item => item.name === 'jack')

console.log(result)
```

everyTree（树结构数据的every方法））
```bash
const result = t.everyTree(treeData, item => item.age >= 18)

console.log(result)
```

atTree（parentId为指定父节点的id，nodeIndex为子节点的索引，可传负数，和数组的at方法一样）
```bash
const result = t.atTree(treeData, parentId, nodeIndex)

console.log(result)
```

indexOfTree（返回一个数组，值为从根节点开始到targetId所在节点的索引，返回值可以传入atIndexOfTree的第二个参数进行取值）
```bash
const result = t.indexOfTree(treeData, targetId)

console.log(result)
```

atIndexOfTree（传入节点数据的下标数组，返回节点数据）
```bash
const result = t.atIndexOfTree(treeData, [0, 1, 0])

console.log(result)
```

nodeDepthMap（返回一个字典，键代表节点的id，值代表该节点在数据的第几层）
```bash
const result = t.nodeDepthMap(treeData)

console.log(result)
```

dedupTree（树结构对象数组去重方法，第一个参数为需要去重的数据，第二个参数为以哪个键去重）
```bash
const result = t.dedupTree(treeData, 'id')

console.log(result)
```