import React from "react";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import Footer from "./Footer";

class App extends React.Component {
  // state
  state = {
    todoData: [
      { id: 0, title: "Выпить кофе", important: false, done: false },
      {
        id: 1,
        title: "Сделать React приложение",
        important: true,
        done: false,
      },
      { id: 2, title: "Позавтракать", important: false, done: false },
    ],
    term: "",
  };

  // важные задачи
  onToggleImportant = (id) => {
    this.setState((state) => {
      // 1. находим индекс задачи в массиве todoData
      const index = state.todoData.findIndex((el) => el.id === id);

      // 2. формируем новый массив {} но с обратным значением important
      const oldItem = state.todoData[index];
      const newItem = { ...oldItem, important: !oldItem.important };

      // 3. формируем новый массив [] с новым значением
      const part1 = state.todoData.slice(0, index);
      const part2 = state.todoData.slice(index + 1);

      return {
        todoData: [...part1, newItem, ...part2],
      };
    });
  };

  // выполненые задачи
  onToggleDone = (id) => {
    this.setState((state) => {
      // 1. находим индекс задачи в массиве todoData
      const index = state.todoData.findIndex((el) => el.id === id);

      // 2. формируем новый массив {} но с обратным значением important
      const oldItem = state.todoData[index];
      const newItem = { ...oldItem, done: !oldItem.done, important: false };

      // 3. формируем новый массив [] с новым значением
      const part1 = state.todoData.slice(0, index);
      const part2 = state.todoData.slice(index + 1);

      return {
        todoData: [...part1, newItem, ...part2],
      };
    });
  };

  // добавление новой задачи
  addItem = (title) => {
    this.setState((state) => {
      // 1. получаем последний id из массива todoData и увеличиваем его на 1
      const ID = state.todoData[state.todoData.length - 1].id + 1;
      // 2. формируем новый элемент списка
      const newItem = {
        id: ID,
        title: title,
        important: false,
        done: false,
      };
      // 3. формируем новый массив [] с новым значением
      return {
        todoData: [...state.todoData, newItem],
      };
    });
  };

  // удаление задачи
  deleteItem = (id) => {
    this.setState((state) => {
      // 1. находим индекс задачи в массиве todoData
      const index = state.todoData.findIndex((el) => el.id === id);

      // 2. формируем новый массив [] без удаленного элемента
      const part1 = state.todoData.slice(0, index);
      const part2 = state.todoData.slice(index + 1);

      return {
        todoData: [...part1, ...part2],
      };
    });
  };

  // поиск по фразе
  search = (items, term) => {
    if (term.trim().length === 0) {
      return items;
    }

    return items.filter((item) => {
      if (item.title.indexOf(term.trim()) > -1) {
        return true;
      }
    });
  };

  // изменение поисковой строки
  changeTerm = (term) => {
    this.setState((state) => {
      return {
        term: term
      }
    })
  }

  render() {
    const visibleItems = this.search(this.state.todoData, this.state.term);

    return (
      <div>
        <Header />
        <Search 
          changeTerm={this.changeTerm}
          term={this.state.term}
        />
        <List
          data={visibleItems}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          deleteItem={this.deleteItem}
        />
        <Footer addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
