import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FechTodo } from '../../hooks';
import style from './fullTitleTodo.module.css';
import { TitleNotTodo } from './noTodo/noTodo';

export const Todo = ({ refrechTodos, isLoading }) => {
	const [todo, setTodo] = useState(null);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let isLoading = false;
		let isTodoLoad = false;

		setTimeout(() => {
			isLoading = true;

			if (!isTodoLoad) {
				return <TitleNotTodo />;
			}
		}, 3000);

		FechTodo(params.id).then((delo) => {
			isTodoLoad = true;

			if (!isLoading) {
				if (!delo) {
					navigate('/noteTodo');
				}
				setTodo(delo);
				console.log(delo);
			}
		});
	}, [params.id, navigate, refrechTodos]);

	if (!todo) {
		return <div className={style.loader}></div>;
	}

	const { title } = todo;

	return (
		<>
			{isLoading ? (
				<div className={style.loader}></div>
			) : (
				<div className={style.block}>
					<h3 className={style.zagalovok}>Todo list</h3>
					<div className={style.todos}>
						{title}
						<button className={style.back} onClick={() => navigate(-1, { replace: true })}>
							Назад
						</button>
					</div>
				</div>
			)}
		</>
	);
};
