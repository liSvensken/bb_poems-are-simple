import { AuthorNameInterface } from "~/interfaces/api/author-name.interface";

export interface PoemInterface {
  id?: number; // todo убрать ?
  poemName: string;
  authorName: AuthorNameInterface;
  urlParam: string;
}
