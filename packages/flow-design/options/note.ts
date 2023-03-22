import { id, name } from "./base";

export const noteId = { ...id };
export const noteName = { ...name, label: "节点描述", type: "textarea" };

export const noteColumn = [noteId, noteName];
