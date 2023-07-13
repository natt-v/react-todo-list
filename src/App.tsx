import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm, TodoList } from "./components"

export type Todo = {
	id: string
	title: string
	completed: boolean
}
export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS")
		if (localValue === null) return []

		return JSON.parse(localValue) as Todo[]
	})

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos))
	}, [todos])

	function addTodo(title: string) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			]
		})
	}

	function toggleTodo(id: string, completed: boolean) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				return todo.id === id ? { ...todo, completed } : todo
			})
		})
	}

	function deleteTodo(id: string) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id)
		})
	}

	console.log({ todos })

	return (
		<>
			<NewTodoForm onSubmit={addTodo} />
			<h1 className="header">Todo List</h1>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	)
}
