import ListItem from './ListItem';

function List() {
	const tasks = [
		{ id: 0, title: 'Выпить кофе' },
		{ id: 1, title: 'Сделать React приложение' },
		{ id: 2, title: 'Позавтракать' },
	];

	const render = tasks.map((task) => {
		return <ListItem key={task.id} task={task} />;
	});

	const emptyList = (
		<li className="todo-item justify-content-center">
			<span className="todo-item-text">Список дел пуст</span>
		</li>
	);

	return <ul className="todo-list">{tasks.length > 0 ? render : emptyList}</ul>;
}

export default List;
