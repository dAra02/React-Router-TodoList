import style from './blockButton.module.css';

export const BlockBtn = ({ isUpdating, isDelete, requestDeleteTodos, requestUpdateTodos }) => {
	return (
		<div className={style.blockButton}>
			<button disabled={isUpdating} onClick={requestUpdateTodos}>
				Обновить список
			</button>
			<button disabled={isDelete} onClick={requestDeleteTodos}>
				Удалить список
			</button>
		</div>
	);
};
