import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useGetTodos, useAddTodo, useUpdateTodos, useDeleteTodos } from './hooks';
import { BlockBtn, NotFound, SotrBtn, TaskBlock, Todo, AddBtn } from './component';
import './App.css';
import { TitleNotTodo } from './component/FullTitleTodo/noTodo/noTodo';

export const App = () => {
	const [refrechTodos, setRefrechTodos] = useState(false);

	const refrechTod = () => setRefrechTodos(!refrechTodos);

	const { todo, isLoading } = useGetTodos(refrechTodos);
	const [newTodo, setNewTodo] = useState([]);

	const { isCreating, requestAddTodos } = useAddTodo(refrechTod);
	const { isUpdating, requestUpdateTodos } = useUpdateTodos(refrechTod);
	const { isDelete, requestDeleteTodos } = useDeleteTodos(refrechTod);

	useEffect(() => {
		setNewTodo(todo);
	}, [todo]);

	const poisc = (value) => {
		let currentTodos = [],
			newList = [];
		if (value !== '') {
			currentTodos = todo;

			newList = currentTodos.filter((todo) => {
				const element = todo.title.toLowerCase();
				const filter = value.toLowerCase();

				return element.includes(filter);
			});
		} else {
			newList = todo;
		}
		setNewTodo(newList);
	};

	const sort = () => {
		const sortedTodos = newTodo.sort((a, b) => {
			if (a.title.toLowerCase() < b.title.toLowerCase()) {
				return -1;
			}
			if (a.title.toLowerCase() > b.title.toLowerCase()) {
				return 1;
			}
			return 0;
		});
		setNewTodo(sortedTodos);
		console.log(sortedTodos);
	};

	return (
		<>
			<div className="zaglav">
				<NavLink to="/" className="link">
					{({ isActive }) =>
						isActive ? (
							<>
								<span>Главная</span>
								<span>✦</span>
							</>
						) : (
							'Главная'
						)
					}
				</NavLink>
			</div>

			<Routes>
				<Route
					path="/"
					element={
						<>
							<TaskBlock poisc={poisc} isLoading={isLoading} newTodo={newTodo} />
							<div className="blockBtn">
								<AddBtn isCreating={isCreating} requestAddTodos={requestAddTodos} />
								<SotrBtn sort={sort} />
							</div>
						</>
					}
				/>
				<Route
					path="/todo/:id"
					element={
						<>
							<Todo refrechTodos={refrechTodos} isLoading={isLoading} />
							<BlockBtn
								isUpdating={isUpdating}
								isDelete={isDelete}
								requestUpdateTodos={requestUpdateTodos}
								requestDeleteTodos={requestDeleteTodos}
							/>
						</>
					}
				/>
				<Route path="/noteTodo" element={<TitleNotTodo />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" replace={true} />} />
			</Routes>
		</>
	);
};
