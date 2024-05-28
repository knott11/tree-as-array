#### 介绍
用类似数组的方法操作树形结构数据。目前已支持mapTree、filterTree、findTree、pushTree、unshiftTree、someTree和everyTree。

#### 安装教程
yarn add tree-as-array
npm i tree-as-array
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

pushTree(targetParentId为根节点的id，newNode为往该根节点添加的数据)
```bash
pushTree(tree, targetParentId, newNode);

console.log(tree)
```

unshiftTree(targetParentId为根节点的id，newNode为往该根节点添加的数据)
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