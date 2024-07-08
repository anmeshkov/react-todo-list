import { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import StatusBar from "./StatusBar";
import List from "./List";
import Footer from "./Footer";

class App extends Component {
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
    status: "all", // all, active, done
  };

  // переключение значений
  toggleParam = (id, param) => {
    this.setState((state) => {
      const newArray = state.todoData.map((task) => {
        // task.id === id ? { ...task, [param]: !task[param] } : task
        if (task.id === id) {
          return param === "done"
            ? { ...task, [param]: !task[param], important: !task.important }
            : { ...task, [param]: !task[param] };
          // return { ...task, [param]: !task[param] };
        } else {
          return task;
        }
      });

      return {
        todoData: newArray,
      };
    });
  };

  // важные задачи
  onToggleImportant = (id) => {
    this.toggleParam(id, "important");
  };

  // выполненые задачи
  onToggleDone = (id) => {
    this.toggleParam(id, "done");
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
      // формируем новый массив [] без удаленного элемента
      return {
        todoData: state.todoData.filter((el) => el.id !== id),
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
        term: term,
      };
    });
  };

  // фильтрация по статусу
  filterByStatus = (items, status) => {
    switch (status) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => {
          if (item.done === false) {
            return true;
          }
        });
      case "done":
        return items.filter((item) => {
          if (item.done === true) {
            return true;
          }
        });
      default:
        return items;
    }
  };

  // изменение статуса заявки
  changeStatus = (status) => {
    this.setState((state) => {
      return {
        status: status,
      };
    });
  };

  render() {
    const filterBySearchItems = this.search(
      this.state.todoData,
      this.state.term
    );
    const filterByStatusItems = this.filterByStatus(
      filterBySearchItems,
      this.state.status
    );

    return (
      <div>
        <Header />
        <div className="search">
          <Search changeTerm={this.changeTerm} term={this.state.term} />
          <StatusBar
            changeStatus={this.changeStatus}
            status={this.state.status}
          />
        </div>
        <List
          data={filterByStatusItems}
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
