import { Element } from "./element.type";
import { PageType } from "./page.type";
import { TextBoxType } from "./textBox.type";

export type HistoryType = {
  id: number;
  undoType: "create" | "modify" | "delete";
  type: "element" | "page";
  content: Element | PageType;
};
export type UndoType = TextBoxType | PageType;
