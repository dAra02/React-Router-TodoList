import style from './addBtn.module.css';
export const AddBtn = ({ isCreating, requestAddTodos }) => (
	<button className={style.addBtn} disabled={isCreating} onClick={requestAddTodos}>
		Добавить новый список
	</button>
);
