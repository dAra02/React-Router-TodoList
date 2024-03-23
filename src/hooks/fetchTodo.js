export const FechTodo = (id) => {
	return new Promise((resolve) => {
		resolve(
			fetch('http://localhost:3005/Todos', {
				method: 'GET',
			})
				.then((dannie) => dannie.json())
				.then((todos) => todos[id - 1]),
		);
	});
};
