import { AuthorNameInterface } from "~/app/interfaces/api/author-name.interface";

export interface PoemInterface {
  poemName: string;
  authorName: AuthorNameInterface;
  pageUrl: string;
}
