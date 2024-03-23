import style from './noTodo.module.css';

export const TitleNotTodo = () => {
	return (
		<>
			<div className={style.block}>
				<h3 className={style.zagalovok}>Todo list</h3>
				<div className={style.notTodo}>Такого дела нет!</div>
			</div>
		</>
	);
};
