import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const { text, checked, id, color, onToggle, onRemove } = this.props;

        console.log(id);

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div style={{ color }}>{text}</div>
                </div>
                {
                    checked && (<div className="checked-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;