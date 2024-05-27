#### description
Some methods for tree-structured data

#### installation
yarn add tree-as-array

#### instructions
import { mapTree, filterTree, findTree} from 'tree-as-array'

### mapTree
mapTree(tree, (item) => {
    console.log(item)
})

### filterTree
const result = filterTree(tree, (item) => {
    return item.id !==2
})
 
console.log(result)

### findTree
const result = findTree(tree, (item) => {
    return item.id !==2
})
 
console.log(result)

### pushTree
pushTree(tree, targetParentId, newNode);

console.log(tree)