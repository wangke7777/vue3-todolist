interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[]
}

enum TODO_STATUS {
  WILLDO = 'willDo',
  DOING = 'doing',
  FINISHED = 'finished'
}

export {
  ITodo,
  IState,
  TODO_STATUS
}