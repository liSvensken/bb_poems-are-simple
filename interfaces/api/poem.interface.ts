import { AuthorNameInterface } from "~/interfaces/api/author-name.interface";

export interface PoemInterface {
  poemName: string;
  authorName: AuthorNameInterface;
  urlParam: string;
}
