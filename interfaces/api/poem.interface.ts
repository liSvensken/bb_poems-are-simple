import { AuthorNameInterface } from "~/interfaces/api/author-name.interface";

export interface PoemInterface {
  id: number;
  poemName: string;
  authorName: AuthorNameInterface;
  urlParam: string;
}
