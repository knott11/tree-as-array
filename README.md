#### 介绍
用数组的方法操作树形结构数据。目前已支持mapTree、filterTree、findTree、pushTree、unshiftTree、someTree、everyTree、atTree、indexOfTree和特殊方法atIndexOfTree、nodeDepthMap。(推荐安装最新版本)

#### 安装教程
```bash
yarn add tree-as-array
npm i tree-as-array
```

#### 使用说明
引入
```bash
import { mapTree, filterTree } from 'tree-as-array'
```

mapTree（遍历树形结构数据的方法，第三个参数可自定义children的名称）
```bash
mapTree(tree, (item) => {
    console.log(item)
},'childrenName')
```

filterTree
```bash
const result = filterTree(tree, (item) => {
    return item.id !== 2
})
 
console.log(result)
```

findTree
```bash
const result = findTree(tree, (item) => {
    return item.id !== 2
})
 
console.log(result)
```

pushTree（targetParentId为目标节点的id，newNode为往该节点添加的数据）
```bash
pushTree(tree, targetParentId, newNode);

console.log(tree)
```

unshiftTree（targetParentId为目标节点的id，newNode为往该节点添加的数据）
```bash
unshiftTree(tree, targetParentId, newNode);

console.log(tree)
```

someTree
```bash
const result = someTree(tree, item => item.name === 'jack')

console.log(result)
```

everyTree
```bash
const result = everyTree(tree, item => item.age >= 18)

console.log(result)
```

atTree（parentId为指定父节点的id，nodeIndex为子节点的索引，可传负数，和数组的at方法一样）
```bash
const result = atTree(tree, parentId, nodeIndex)

console.log(result)
```

indexOfTree（返回一个数组，值为从根节点开始到targetId所在节点的索引）
```bash
const result = indexOfTree(tree, targetId)

console.log(result)
```

atIndexOfTree（传入节点数据的下标数组，返回节点数据）
```bash
const result = atIndexOfTree(tree, [0, 1, 0])

console.log(result)
```

nodeDepthMap（返回一个字典，键代表节点的id，值代表该节点在数据的第几层）
```bash
const result = nodeDepthMap(tree)

console.log(result)
```