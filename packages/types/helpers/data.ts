export type Data<T = any> = Record<string, T>

export type TreeNode<T = Data> = T & { children?: TreeNode<T>[] }

export type MaybePromise<T> = Promise<T> | T
