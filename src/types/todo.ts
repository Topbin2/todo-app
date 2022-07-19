export interface todoSliceInitialState {
  todos: todosType[];
  enteredInput: string;
}

export interface todosType {
  id: number;
  createdAt: string;
  title: string;
}
