import { PoemInterface } from '~/interfaces/api/poem.interface';

export const poemsList: PoemInterface[] = [
  {
    id: 1,
    poemName: 'И снова давние картины…',
    authorName: {
      firstName: 'Брюсов',
      name: 'Валерий',
      patronymic: 'Яковлевич'
    },
    urlParam: '/'
  },
  {
    id: 2,
    poemName: 'На сухой осине серая ворона…',
    authorName: {
      firstName: 'Брюсов',
      name: 'Валерий',
      patronymic: 'Яковлевич'
    },
    urlParam: '/'
  },
  {
    id: 3,
    poemName: 'Нет тебе на свете равных…',
    authorName: {
      firstName: 'Брюсов',
      name: 'Валерий',
      patronymic: 'Яковлевич'
    },
    urlParam: '/'
  }
]
