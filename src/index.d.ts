interface TreeNode<T> {
  [key: string]: any; // 允许节点有任意属性  
  [childrenName: string]: T[] | undefined; // childrenName 是动态的，但通常我们会期望它是 'children'  
  id?: string; // 假设节点可能有一个id属性，但它是可选的  
}

declare const tree: {
  mapTree<T extends TreeNode<any>>(
    data: T[],
    callback: (item: T) => any,
    fieldNames?: { children?: string, id?: string }
  ): any[];

  filterTree<T extends TreeNode<any>>(
    tree: T[],
    filterFn: (node: T) => boolean,
    fieldNames?: { children?: string, id?: string }
  ): T[];

  findTree<T extends TreeNode<any>>(
    treeNodes: T[],
    conditionFn: (node: T) => boolean,
    fieldNames?: { children?: string, id?: string }
  ): T | null;

  pushTree<T extends TreeNode<any>>(
    tree: T[],
    rootId: string,
    newNode: T,
    fieldNames?: { children?: string, id?: string }
  ): void;

  unshiftTree<T extends TreeNode<any>>(
    tree: T[],
    rootId: string,
    newNode: T,
    fieldNames?: { children?: string, id?: string }
  ): void;

  popTree<T extends TreeNode<any>>(
    tree: T[],
    rootId: string,
    fieldNames?: { children?: string, id?: string }
  ): void;

  shiftTree<T extends TreeNode<any>>(
    tree: T[],
    rootId: string,
    fieldNames?: { children?: string, id?: string }
  ): void;

  someTree<T extends TreeNode<any>>(
    tree: T[],
    filterFn: (node: T) => boolean,
    fieldNames?: { children?: string, id?: string }
  ): boolean;

  everyTree<T extends TreeNode<any>>(
    tree: T[],
    filterFn: (node: T) => boolean,
    fieldNames?: { children?: string, id?: string }
  ): boolean;

  atTree<T extends TreeNode<any>>(
    tree: T[],
    parentId: string,
    nodeIndex: number,
    fieldNames?: { children?: string, id?: string }
  ): T | null;

  indexOfTree<T extends TreeNode<any>>(
    tree: T[],
    targetId: string,
    fieldNames?: { children?: string, id?: string }
  ): number[] | null;

  atIndexOfTree<T extends TreeNode<any>>(
    tree: T[],
    path: number[],
    fieldNames?: { children?: string, id?: string }
  ): T | null;

  nodeDepthMap<T extends TreeNode<any>>(
    tree: T[],
    fieldNames?: { children?: string, id?: string }
  ): { [id: string]: number };

  dedupTree<T extends TreeNode<any>>(
    tree: T[],
    key: string,
  ): T | null;
};

export default tree;