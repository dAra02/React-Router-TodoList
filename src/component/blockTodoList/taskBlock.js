import { Link } from 'react-router-dom';

import style from './taskBlock.module.css';

export const TaskBlock = ({ poisc, isLoading, newTodo }) => {
	return (
		<>
			<div className={style.block}>
				<h3 className={style.zagalovok}>Todo list</h3>
				<input onChange={({ target: { value } }) => poisc(value)} type="text" className={style.poisc} placeholder="Поиск..." />
				{isLoading ? (
					<div className={style.loader}></div>
				) : (
					newTodo.map(({ id, title }) => (
						<div className={style.todos} key={id}>
							<Link className={style.link} to={`todo/${id}`}>
								{title}
							</Link>
						</div>
					))
				)}
			</div>
		</>
	);
};
