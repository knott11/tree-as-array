export function mapTree(data, callback, childrenName = 'children') {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const mappedItem = callback(item);
    result.push(mappedItem);
    if (item?.[childrenName] && item?.[childrenName].length > 0) {
      const childResult = mapTree(item?.[childrenName], callback, childrenName);
      result.push(...childResult);
    }
  }
  return result;
};

const filterArr = []
export function filterTree(tree, filterFn) {
  for (let node of tree) {
    if (node.children) {
      filterTree(node.children, filterFn)
    }
    if (filterFn(node)) {
      filterArr.push(node)
    }
  }
  return filterArr
}

export function findTree(treeNodes, conditionFn) {
  for (const node of treeNodes) {
    if (conditionFn(node)) {
      return node; // 如果当前节点满足条件，返回该节点  
    }
    if (node.children) {
      const foundInChildren = findTree(node.children, conditionFn); // 递归在子节点中查找  
      if (foundInChildren) {
        return foundInChildren; // 如果在子节点中找到，返回找到的节点  
      }
    }
  }
  return null; // 如果遍历完整棵树都没找到，返回null  
}

export function pushTree(tree, rootId, newNode) {
  // 内部递归函数，用于在树中查找并插入新节点  
  function findAndPushNode(nodes, targetId, newNode) {
    // 使用Array.some替代for循环，允许在找到匹配项时提前退出  
    return nodes.some(node => {
      if (node.id === targetId) {
        // 如果找到目标节点，则添加新节点并返回true  
        if (!node.children) {
          node.children = [];
        }
        node.children.push(newNode);
        return true; // 中断循环  
      }
      // 如果没有找到，并且有子节点，则递归地在子节点中查找  
      if (node.children) {
        return findAndPushNode(node.children, targetId, newNode);
      }
      return false; // 继续循环  
    });
  }

  // 调用内部函数开始搜索并添加节点  
  if (!findAndPushNode(tree, rootId, newNode)) {
    console.error(`Node with ID ${rootId} not found in the tree.`);
  }
}

export function unshiftTree(tree, rootId, newNode) {
  // 内部递归函数，用于在树中查找并插入新节点  
  function findAndPushNode(nodes, targetId, newNode) {
    // 使用Array.some替代for循环，允许在找到匹配项时提前退出  
    return nodes.some(node => {
      if (node.id === targetId) {
        // 如果找到目标节点，则添加新节点并返回true  
        if (!node.children) {
          node.children = [];
        }
        node.children.unshift(newNode);
        return true; // 中断循环  
      }
      // 如果没有找到，并且有子节点，则递归地在子节点中查找  
      if (node.children) {
        return findAndPushNode(node.children, targetId, newNode);
      }
      return false; // 继续循环  
    });
  }

  // 调用内部函数开始搜索并添加节点  
  if (!findAndPushNode(tree, rootId, newNode)) {
    console.error(`Node with ID ${rootId} not found in the tree.`);
  }
}

let isSome = false
export function someTree(tree, filterFn) {
  for (let node of tree) {
    if (node.children) {
      someTree(node.children, filterFn)
    }
    if (filterFn(node)) {
      isSome = true
    }
  }
  return isSome
}

const isEvery = []
let treeLength = 0
export function everyTree(tree, filterFn) {
  for (let node of tree) {
    treeLength++
    if (node.children) {
      everyTree(node.children, filterFn)
    }
    if (filterFn(node)) {
      isEvery.push(node)
    }
  }
  if (treeLength === isEvery.length) {
    return true
  }
  return false
}

export function atTree(tree, parentId, nodeIndex) {
  // 遍历树中的每个节点  
  for (const node of tree) {
    // 如果找到了对应的父节点  
    if (node.id === parentId) {
      // 如果nodeIndex为负数，则将其转换为正数索引  
      let adjustedNodeIndex = nodeIndex >= 0 ? nodeIndex : node.children.length + nodeIndex;

      // 检查调整后的索引是否在子节点数组的范围内  
      if (node.children && adjustedNodeIndex >= 0 && adjustedNodeIndex < node.children.length) {
        // 返回指定索引处的子节点  
        return node.children[adjustedNodeIndex];
      } else {
        // 如果索引无效或没有子节点，则返回null  
        return null;
      }
    }
    // 如果当前节点有子节点，递归地在子树中查找  
    if (node.children) {
      const foundNode = atTree(node.children, parentId, nodeIndex);
      if (foundNode) {
        return foundNode; // 如果在子树中找到了，返回找到的节点  
      }
    }
  }
  return null; // 如果没有找到，返回null  
}