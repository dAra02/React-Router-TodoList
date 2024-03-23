import style from './sotrBtn.module.css';

export const SotrBtn = ({ sort }) => {
	return (
		<div className={style.sortButton}>
			<button onClick={sort}>Отсортировать</button>
		</div>
	);
};
