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

export function filterTree(tree, filterFn) {
  return tree
    .filter(node => filterFn(node))
    .map(node => ({
      ...node,
      children: node.children ? filterTree(node.children, filterFn) : undefined
    }));
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

export function someTree(trees, predicate) {
  // 遍历树数组中的每个树根节点  
  for (let tree of trees) {
    // 定义一个递归函数来遍历树的节点  
    function traverse(node) {
      // 检查当前节点是否满足条件  
      if (predicate(node)) {
        return true;
      }
      // 如果有子节点，则递归遍历它们  
      if (node.children) {
        for (let child of node.children) {
          if (traverse(child)) {
            return true;
          }
        }
      }
      return false;
    }
    // 对当前树根节点调用递归函数  
    if (traverse(tree)) {
      return true; // 如果找到满足条件的节点，则立即返回true  
    }
  }
  return false; // 如果遍历完所有树都没有找到满足条件的节点，则返回false  
}

export function everyTree(trees, predicate) {
  // 遍历树数组中的每个树根节点  
  for (let tree of trees) {
    // 定义一个递归函数来遍历树的节点  
    function traverse(node) {
      // 检查当前节点是否满足条件  
      if (!predicate(node)) {
        return false; // 如果当前节点不满足条件，立即返回false  
      }
      // 如果有子节点，则递归检查它们是否都满足条件  
      if (node.children) {
        for (let child of node.children) {
          if (!traverse(child)) {
            return false; // 如果任一子节点不满足条件，立即返回false  
          }
        }
      }
      return true; // 所有检查的节点都满足条件，返回true  
    }
    // 对当前树根节点调用递归函数  
    if (!traverse(tree)) {
      return false; // 如果任一树根节点或其子节点不满足条件，则立即返回false  
    }
  }
  return true; // 所有树中的所有节点都满足条件，返回true  
}