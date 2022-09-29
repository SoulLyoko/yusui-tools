import { buildTree, flatTree, filterTree, findTree, treeMap } from "../src/tree";

const useTreeData = () => [
  {
    id: "1",
    parentId: "0",
    children: [
      {
        id: "1-1",
        parentId: "1",
        children: [{ id: "1-1-1", parentId: "1-1" }]
      },
      {
        id: "1-2",
        parentId: "1",
        children: [
          { id: "1-2-1", parentId: "1-2" },
          { id: "1-2-2", parentId: "1-2" }
        ]
      },
      {
        id: "1-3",
        parentId: "1",
        children: [
          { id: "1-3-1", parentId: "1-3" },
          { id: "1-3-2", parentId: "1-3" },
          { id: "1-3-3", parentId: "1-3" }
        ]
      }
    ]
  },
  {
    id: "2",
    parentId: "0",
    children: [
      {
        id: "2-1",
        parentId: "2",
        children: [{ id: "2-1-1", parentId: "2-1" }]
      },
      {
        id: "2-2",
        parentId: "2",
        children: [
          { id: "2-2-1", parentId: "2-2" },
          { id: "2-2-2", parentId: "2-2" }
        ]
      },
      {
        id: "2-3",
        parentId: "2",
        children: [
          { id: "2-3-1", parentId: "2-3" },
          { id: "2-3-2", parentId: "2-3" },
          { id: "2-3-3", parentId: "2-3" }
        ]
      }
    ]
  }
];

const useListData = () => [
  { id: "1", parentId: "0" },
  { id: "1-1", parentId: "1" },
  { id: "1-1-1", parentId: "1-1" },
  { id: "1-2", parentId: "1" },
  { id: "1-2-1", parentId: "1-2" },
  { id: "1-2-2", parentId: "1-2" },
  { id: "1-3", parentId: "1" },
  { id: "1-3-1", parentId: "1-3" },
  { id: "1-3-2", parentId: "1-3" },
  { id: "1-3-3", parentId: "1-3" },
  { id: "2", parentId: "0" },
  { id: "2-1", parentId: "2" },
  { id: "2-1-1", parentId: "2-1" },
  { id: "2-2", parentId: "2" },
  { id: "2-2-1", parentId: "2-2" },
  { id: "2-2-2", parentId: "2-2" },
  { id: "2-3", parentId: "2" },
  { id: "2-3-1", parentId: "2-3" },
  { id: "2-3-2", parentId: "2-3" },
  { id: "2-3-3", parentId: "2-3" }
];

describe("tree utils", () => {
  it("buildTree", () => {
    expect(buildTree(useListData())).toEqual(useTreeData());
  });

  it("flatTree", () => {
    const withoutDepth = flatTree(useTreeData());
    const withDepth = flatTree(useTreeData(), { returnDepth: true });
    expect(withoutDepth).toEqual(useListData());
    expect(withDepth).toContainEqual({ id: "1-3-3", parentId: "1-3", _depth: 2 });
  });

  it("filterTree", () => {
    const withFlat = filterTree(useTreeData(), node => node.id === "1-3-3");
    const withoutFlat = filterTree(useTreeData(), node => node.id === "1-3-3", { flat: false });
    expect(filterTree(useTreeData(), node => node.id === "3")).toEqual([]);
    expect(withFlat).toEqual([{ id: "1-3-3", parentId: "1-3" }]);
    expect(withoutFlat).toEqual([
      {
        id: "1",
        parentId: "0",
        children: [
          {
            id: "1-3",
            parentId: "1",
            children: [{ id: "1-3-3", parentId: "1-3" }]
          }
        ]
      }
    ]);
  });

  it("findTree", () => {
    expect(findTree(useTreeData(), node => node.id === "3")).toBeNull();
    expect(findTree(useTreeData(), node => node.id === "1-3-3")).toEqual({ id: "1-3-3", parentId: "1-3" });
  });

  it("treeMap", () => {
    const result = treeMap(useTreeData(), (node, index, parent, depth) => ({
      ...node,
      index,
      _parentId: parent?.id,
      depth
    }));
    const flatResult = flatTree(result);
    expect(flatResult).toContainEqual({ id: "1-3-3", parentId: "1-3", index: 2, _parentId: "1-3", depth: 2 });
  });
});
