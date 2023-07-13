type Props = {
	id: string
	title: string
	completed: boolean
	toggleTodo: (id: string, completed: boolean) => void
	deleteTodo: (id: string) => void
}

export function TodoItem({
	id,
	title,
	completed,
	toggleTodo,
	deleteTodo,
}: Props) {
	return (
		<li key={id}>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button className="btn btn-danger" onClick={() => deleteTodo(id)}>
				Delete
			</button>
		</li>
	)
}
