const tree = {
  mapTree(data, callback, fieldNames = { children: 'children', id: 'id' }) {
    // 使用 flatMap 来同时映射和展平数组  
    return data.flatMap(item => {
      const mappedItem = callback(item);
      const childrenResult = item?.[fieldNames.children] && item?.[fieldNames.children].length > 0
        ? tree.mapTree(item?.[fieldNames.children], callback, fieldNames) // 递归处理子节点  
        : []; // 如果没有子节点，返回一个空数组  

      // 返回映射后的项和子节点的映射结果（如果有的话）  
      return [mappedItem, ...childrenResult];
    });
  },
  filterTree(tree, filterFn, fieldNames = { children: 'children', id: 'id' }) {
    const result = [];
    function filterHelper(nodes) {
      nodes.map((node, index) => {
        if (filterFn(node, index)) {
          result.push(node);
        }
        if (node?.[fieldNames.children]) {
          filterHelper(node?.[fieldNames.children]);
        }
      })
    }
    filterHelper(tree);
    return result;
  },

  findTree(tree, conditionFn, fieldNames = { children: 'children', id: 'id' }) {
    for (const node of tree) {
      if (conditionFn(node)) {
        return node; // 如果当前节点满足条件，返回该节点  
      }
      if (node?.[fieldNames.children]) {
        const foundInChildren = this.findTree(node?.[fieldNames.children], conditionFn, fieldNames); // 递归在子节点中查找  
        if (foundInChildren) {
          return foundInChildren; // 如果在子节点中找到，返回找到的节点  
        }
      }
    }
    return null; // 如果遍历完整棵树都没找到，返回null  
  },

  pushTree(tree, rootId, newNode, fieldNames = { children: 'children', id: 'id' }) {
    // 内部递归函数，用于在树中查找并插入新节点  
    function findAndPushNode(nodes, targetId, newNode, fieldNames) {
      for (let node of nodes) {
        if (node?.[fieldNames.id] === targetId) {
          // 如果找到目标节点，则添加新节点  
          if (!node?.[fieldNames.children]) {
            node[fieldNames.children] = [];
          }
          node[fieldNames.children].push(newNode);
          return true; // 中断循环  
        }
        // 如果没有找到，并且有子节点，则递归地在子节点中查找  
        if (node?.[fieldNames.children]) {
          const found = findAndPushNode(node[fieldNames.children], targetId, newNode, fieldNames);
          if (found) {
            return true; // 如果在子节点中找到，则中断主循环  
          }
        }
      }
      return false; // 继续循环  
    }

    // 调用内部函数开始搜索并添加节点  
    if (!findAndPushNode(tree, rootId, newNode, fieldNames)) {
      console.error(`Node with ID ${rootId} not found in the tree.`);
    }
  },

  unshiftTree(tree, rootId, newNode, fieldNames = { children: 'children', id: 'id' }) {
    // 内部递归函数，用于在树中查找并插入新节点  
    function findAndUnshiftNode(nodes, targetId, newNode, fieldNames) {
      for (let node of nodes) {
        if (node?.[fieldNames.id] === targetId) {
          // 如果找到目标节点，则添加新节点  
          if (!node?.[fieldNames.children]) {
            node[fieldNames.children] = [];
          }
          node[fieldNames.children].unshift(newNode);
          return true; // 中断循环  
        }
        // 如果没有找到，并且有子节点，则递归地在子节点中查找  
        if (node?.[fieldNames.children]) {
          const found = findAndUnshiftNode(node[fieldNames.children], targetId, newNode, fieldNames);
          if (found) {
            return true; // 如果在子节点中找到，则中断主循环  
          }
        }
      }
      return false; // 继续循环  
    }

    // 调用内部函数开始搜索并添加节点  
    if (!findAndUnshiftNode(tree, rootId, newNode, fieldNames)) {
      console.error(`Node with ID ${rootId} not found in the tree.`);
    }
  },

  popTree(tree, rootId, fieldNames = { children: 'children', id: 'id' }) {
    // 内部递归函数，用于在树中查找并移除最后一个子节点  
    function findAndPopNode(nodes, targetId, fieldNames) {
      for (let node of nodes) {
        if (node?.[fieldNames.id] === targetId) {
          // 如果找到目标节点，并且有子节点，则移除最后一个子节点  
          if (node?.[fieldNames.children] && node[fieldNames.children].length > 0) {
            node[fieldNames.children].pop();
          }
          return true; // 中断循环  
        }
        // 如果没有找到，并且有子节点，则递归地在子节点中查找  
        if (node?.[fieldNames.children]) {
          const found = findAndPopNode(node[fieldNames.children], targetId, fieldNames);
          if (found) {
            return true; // 如果在子节点中找到，则中断主循环  
          }
        }
      }
      return false; // 继续循环  
    }

    // 调用内部函数开始搜索并移除节点  
    if (!findAndPopNode(tree, rootId, fieldNames)) {
      console.error(`Node with ID ${rootId} not found in the tree, or it has no children to pop.`);
    }
  },

  shiftTree(tree, rootId, fieldNames = { children: 'children', id: 'id' }) {
    // 内部递归函数，用于在树中查找并移除最后一个子节点  
    function findAndShiftNode(nodes, targetId, fieldNames) {
      for (let node of nodes) {
        if (node?.[fieldNames.id] === targetId) {
          // 如果找到目标节点，并且有子节点，则移除最后一个子节点  
          if (node?.[fieldNames.children] && node[fieldNames.children].length > 0) {
            node[fieldNames.children].shift();
          }
          return true; // 中断循环  
        }
        // 如果没有找到，并且有子节点，则递归地在子节点中查找  
        if (node?.[fieldNames.children]) {
          const found = findAndShiftNode(node[fieldNames.children], targetId, fieldNames);
          if (found) {
            return true; // 如果在子节点中找到，则中断主循环  
          }
        }
      }
      return false; // 继续循环  
    }

    // 调用内部函数开始搜索并移除节点  
    if (!findAndShiftNode(tree, rootId, fieldNames)) {
      console.error(`Node with ID ${rootId} not found in the tree, or it has no children to pop.`);
    }
  },

  someTree(tree, filterFn, fieldNames = { children: 'children', id: 'id' }) {
    function someHelper(nodes) {
      for (let node of nodes) {
        if (filterFn(node)) {
          return true; // 如果当前节点满足条件，返回true  
        }
        if (node?.[fieldNames.children] && someHelper(node?.[fieldNames.children])) {
          return true; // 如果在子节点中找到满足条件的节点，返回true  
        }
      }
      return false; // 遍历完当前节点的所有子节点都未找到满足条件的节点  
    }

    return someHelper(tree); // 开始从根节点搜索  
  },

  everyTree(tree, filterFn, fieldNames = { children: 'children', id: 'id' }) {
    function everyHelper(nodes) {
      for (let node of nodes) {
        if (!filterFn(node)) {
          return false; // 如果当前节点不满足条件，立即返回false  
        }
        if (node?.[fieldNames.children] && !everyHelper(node?.[fieldNames.children])) {
          return false; // 如果子节点中有不满足条件的节点，返回false  
        }
      }
      return true; // 所有遍历到的节点都满足条件  
    }

    return everyHelper(tree); // 从根节点开始检查  
  },

  atTree(tree, parentId, nodeIndex, fieldNames = { children: 'children', id: 'id' }) {
    // 遍历树中的每个节点  
    for (const node of tree) {
      // 如果找到了对应的父节点  
      if (node?.[fieldNames.id] === parentId) {
        // 如果nodeIndex为负数，则将其转换为正数索引  
        let adjustedNodeIndex = nodeIndex >= 0 ? nodeIndex : node?.[fieldNames.children].length + nodeIndex;

        // 检查调整后的索引是否在子节点数组的范围内  
        if (node?.[fieldNames.children] && adjustedNodeIndex >= 0 && adjustedNodeIndex < node?.[fieldNames.children].length) {
          // 返回指定索引处的子节点  
          return node?.[fieldNames.children][adjustedNodeIndex];
        } else {
          // 如果索引无效或没有子节点，则返回null  
          return null;
        }
      }
      // 如果当前节点有子节点，递归地在子树中查找  
      if (node?.[fieldNames.children]) {
        const foundNode = this.atTree(node?.[fieldNames.children], parentId, nodeIndex, fieldNames);
        if (foundNode) {
          return foundNode; // 如果在子树中找到了，返回找到的节点  
        }
      }
    }
    return null; // 如果没有找到，返回null  
  },

  indexOfTree(tree, targetId, fieldNames = { children: 'children', id: 'id' }) {
    function search(nodes, targetId, path = []) {
      for (const node of nodes) { // 使用 for...of 循环代替 some，以便直接返回路径  
        const currentNodePath = [...path, nodes.indexOf(node)]; // 注意这里使用了 nodes.indexOf(node)，这假设节点在数组中是唯一的  
        if (node?.[fieldNames.id] === targetId) {
          return currentNodePath; // 直接返回找到的路径  
        }
        if (node?.[fieldNames.children]) {
          const childResult = search(node?.[fieldNames.children], targetId, currentNodePath);
          if (childResult) {
            return childResult; // 如果子节点搜索有结果，返回找到的路径  
          }
        }
      }
      return null; // 如果没有找到目标节点，返回 null  
    }

    return search(tree, targetId); // 从根节点开始搜索  
  },

  atIndexOfTree(tree, path, fieldNames = { children: 'children', id: 'id' }) {
    function traverse(nodes, indexPath, fieldNames) {
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

      if (currentNode?.[fieldNames.children]) {
        return traverse(currentNode?.[fieldNames.children], indexPath.slice(1), fieldNames);
      }

      return null;
    }

    return traverse(tree, path, fieldNames);
  },

  nodeDepthMap(tree, fieldNames = { children: 'children', id: 'id' }) {
    const nodeDepths = {}; // 用于存储每个节点的深度  

    // 定义一个内部函数，用于递归计算节点的深度  
    function calculateDepth(node, currentDepth = 1) {
      // 存储当前节点的深度  
      nodeDepths[node?.[fieldNames.id]] = currentDepth;

      // 如果有子节点，递归计算它们的深度  
      if (node?.[fieldNames.children]) {
        for (const childNode of node?.[fieldNames.children]) {
          calculateDepth(childNode, currentDepth + 1); // 传递给子节点的深度是当前节点深度+1  
        }
      }
    }

    // 遍历树的每个节点，并计算它们的深度  
    for (const rootNode of tree) {
      calculateDepth(rootNode); // 从根节点开始计算深度  
    }

    return nodeDepths; // 返回节点深度对象  
  },

  dedupTree(tree, key) {
    const uniqueArray = [];
    const seenKeys = new Set();

    const traverse = (items) => {
      for (let item of items) {
        // 如果是一个对象，并且它的key还没有被看到过  
        if (typeof item === 'object' && item !== null && !seenKeys.has(item[key])) {
          seenKeys.add(item[key]);
          const uniqueItem = { ...item }; // 创建一个浅拷贝  

          // 遍历对象的所有属性  
          Object.keys(uniqueItem).forEach(prop => {
            // 如果属性值是数组，则递归处理这个数组  
            if (Array.isArray(uniqueItem[prop])) {
              uniqueItem[prop] = this.dedupTree(uniqueItem[prop], key); // 递归去重  
            }
          });

          uniqueArray.push(uniqueItem);
        }
        // 如果item本身是一个数组，也需要递归处理  
        else if (Array.isArray(item)) {
          traverse(item);
        }
      }
    }

    traverse(tree);
    return uniqueArray;
  },
};

export default tree;