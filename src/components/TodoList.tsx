import { Todo } from "../App"
import { TodoItem } from "./TodoItem"

type Props = {
	todos: Todo[]
	toggleTodo: (id: string, completed: boolean) => void
	deleteTodo: (id: string) => void
}

export function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
	return (
		<ul className="list">
			{!todos.length && "No Todos"}
			{todos.map((todo) => {
				return (
					<TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
				)
			})}
		</ul>
	)
}
