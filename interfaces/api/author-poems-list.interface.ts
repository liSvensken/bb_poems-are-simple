import { AuthorNameInterface } from "~/interfaces/api/author-name.interface";
import { PoemInterface } from "~/interfaces/api/poem.interface";

export interface AuthorPoemsListInterface {
  authorName: AuthorNameInterface;
  poemsList: PoemInterface[]
}
