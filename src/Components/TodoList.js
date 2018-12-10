import React, { Component } from 'react'

class TodoList extends Component{
  render(){
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>

            <div className="input-group">
            <input className="form-control" placeholder="Task"
                   ref={this.props.inputElement}
                   value={this.props.currentItem.text}
                   onChange={this.props.handleInput}

            />
            </div>
            <button className="btn btn-success" type="submit">Add task</button>
          </form>

        </div>
      </div>

    )
  }

}

export default TodoList