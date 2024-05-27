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
    return tree.filter((node) => {
        const includeNode = filterFn(node);

        if (includeNode && node.children) {
            // 如果节点应该被包含，并且它有子节点，那么递归地过滤子节点
            node.children = filterTree(node.children, filterFn);
        }

        return includeNode;
    });
}


export function findTree(tree, testFn) {
    // 如果树为空，则返回null
    if (!tree) return null;

    // 使用测试函数检查当前节点
    if (testFn(tree)) {
        // 找到匹配的节点，返回该节点
        return tree;
    }

    // 递归地在子节点中查找
    for (const child of tree.children || []) {
        const foundNode = findInTree(child, testFn);
        // 如果找到了匹配的节点，返回该节点
        if (foundNode) {
            return foundNode;
        }
    }

    // 如果没有找到匹配的节点，返回null
    return null;
}