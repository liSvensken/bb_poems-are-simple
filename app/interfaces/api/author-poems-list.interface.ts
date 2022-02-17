import { AuthorNameInterface } from "~/app/interfaces/api/author-name.interface";
import { PoemInterface } from "~/app/interfaces/api/poem.interface";

export interface AuthorPoemsListInterface {
  authorName: AuthorNameInterface;
  poemsList: PoemInterface[]
}
