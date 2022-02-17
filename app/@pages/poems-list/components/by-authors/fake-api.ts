import { AuthorPoemsListInterface } from "~/app/interfaces/api/author-poems-list.interface";
import { AuthorNameInterface } from "~/app/interfaces/api/author-name.interface";

export const authorPoemsListResponse: AuthorPoemsListInterface[] = [
  {
    authorName: {
      firstName: "Ле́рмонтов",
      name: "Михаи́л",
      patronymic: "Ю́рьевич"
    },
    poemsList: [
      {
        poemName: "Прощай, немытая Россия…",
        authorName: { firstName: "Ле́рмонтов", name: "Михаи́л", patronymic: "Ю́рьевич" },
        pageUrl: "/"
      },
      {
        poemName: "Выхожу один я на дорогу…",
        authorName: { firstName: "Ле́рмонтов", name: "Михаи́л", patronymic: "Ю́рьевич" },
        pageUrl: "/"
      },
      {
        poemName: "И скучно и грустно…",
        authorName: { firstName: "Ле́рмонтов", name: "Михаи́л", patronymic: "Ю́рьевич" },
        pageUrl: "/"
      },
      {
        poemName: "Демон",
        authorName: { firstName: "Ле́рмонтов", name: "Михаи́л", patronymic: "Ю́рьевич" },
        pageUrl: "/"
      }
    ]
  },
  {
    authorName: {
      firstName: "Тю́тчев",
      name: "Фёдор",
      patronymic: "Ива́нович"
    },
    poemsList: [
      {
        poemName: "Она сидела на полу",
        authorName: { firstName: "Тю́тчев", name: "Фёдор", patronymic: "Ива́нович" },
        pageUrl: "/"
      },
      {
        poemName: "Зима недаром злится",
        authorName: { firstName: "Тю́тчев", name: "Фёдор", patronymic: "Ива́нович" },
        pageUrl: "/"
      }
    ]
  }
]
