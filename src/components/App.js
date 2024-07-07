import React from "react";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    todoData: [
      { id: 0, title: "Выпить кофе" },
      { id: 1, title: "Сделать React приложение" },
      { id: 2, title: "Позавтракать" },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <Search />
        <List data={this.state.todoData}/>
        <Footer />
      </div>
    );
  }
}

export default App;
