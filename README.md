#### 介绍
用类似数组的方法操作树形结构数据。目前已支持mapTree、filterTree、findTree、pushTree、unshiftTree、someTree、everyTree、atTree和特殊方法nodeDepthMap。

#### 安装教程
```bash
yarn add tree-as-array
npm i tree-as-array
```

#### 使用说明
引入
```bash
import { mapTree, filterTree} from 'tree-as-array'
```

mapTree
```bash
mapTree(tree, (item) => {
    console.log(item)
})
```

filterTree
```bash
const result = filterTree(tree, (item) => {
    return item.id !==2
})
 
console.log(result)
```

findTree
```bash
const result = findTree(tree, (item) => {
    return item.id !==2
})
 
console.log(result)
```

pushTree(targetParentId为目标节点的id，newNode为往该节点添加的数据)
```bash
pushTree(tree, targetParentId, newNode);

console.log(tree)
```

unshiftTree(targetParentId为目标节点的id，newNode为往该节点添加的数据)
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

atTree(parentId为指定父节点的id，nodeIndex为子节点的索引，可传负数，和数组的at方法一样)
```bash
const result = atTree(tree, parentId, nodeIndex)

console.log(result)
```

nodeDepthMap(返回一个字典，键代表节点的id，值代表该节点在数据的第几层)
```bash
const result = nodeDepthMap(tree)

console.log(result)
```