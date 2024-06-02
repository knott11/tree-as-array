declare module 'tree-as-array' {
  export function mapTree<T>(data: T[], callback: (item: T) => any, childrenName?: string): any[];
  export function filterTree<T>(tree: T[], filterFn: (node: T) => boolean): T[];
  export function findTree<T>(tree: T | null, testFn: (node: T) => boolean): T | null;
  export function pushTree<T>(tree: T[], targetParentId: string | number, newNode: {} | {}[]): void;
  export function unshiftTree<T>(tree: T[], targetParentId: string | number, newNode: {} | {}[]): void;
  export function someTree<T>(trees: T[], predicate: (node: T) => boolean): boolean;
  export function everyTree<T>(trees: T[], predicate: (node: T) => boolean): boolean;
  export function atTree<T>(tree: T[], parentId: string | number, nodeIndex: number): T | null;
  export function indexOfTree<T>(tree: T[], targetId: string | number): T | null;
  export function atIndexOfTree<T>(tree: T[], path: (string | number)[]): T | null;
  export function nodeDepthMap<T>(tree: T[]): Record<string | number, number>;
}