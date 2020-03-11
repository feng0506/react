import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  //生命周期函数 ：   在某一时刻，可以自动执行的函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['test1', 'test2']
    }
  }
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount---------组件将要挂载到页面的时刻')
  }

  componentDidMount() {
    console.log('componentDidMount---------组件挂载完成的时刻')
  }

  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE_componentWillUpdate-----------------------')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate-----------------------')
  }

  render() {
    console.log('render---------------组件挂载中，渲染页面')
    return (
      <Fragment>
        <div>
          {/* 这是一段注释 */}
          <input
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={input => {
              this.input = input
            }}
          />
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <XiaojiejieItem
                key={item + index}
                content={item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
              ></XiaojiejieItem>
            )
          })}
        </ul>
      </Fragment>
    )
  }
  inputChange() {
    // console.log(this)
    this.setState({
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie
