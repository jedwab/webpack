import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import ToDo from '../components/ToDo';


class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            data: [{
                    id: 1,
                        text: 'Conquer the World'
                    }, {
                    id: 2,
                        text: 'Drink coffee'
                    }, {
                    id: 3,
                        text: 'Repeat'
                    }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    // e -> event zainstniały na input
    handleKeyUp(e) {
        // 13 - ENTER
        const value = e.target.value;

        if (e.keyCode === 13 && value) {
            this.addTodo(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title qty={this.state.data.length} />
                <TodoList qtydata={this.state.data} remove={this.removeTodo.bind(this)}/>

                <TodoForm handleKeyUp={this.handleKeyUp.bind(this)} />
            </div>
        );
    }
}

export default App;