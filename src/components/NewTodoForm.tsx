import { useState } from "react"

type Props = {
	onSubmit: (title: string) => void
}

export function NewTodoForm({ onSubmit }: Props) {
	const [newItem, setNewItem] = useState("")

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (newItem && newItem === "") {
			return
		}

		onSubmit(newItem)

		setNewItem("")
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						type="text"
						id="item"
					/>
				</div>
				<button className="btn">Add</button>
			</form>
		</>
	)
}
