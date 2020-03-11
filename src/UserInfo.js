import React, { Component } from 'react'
import axios from 'axios'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.select = this.select.bind(this)
    this.state = {
      inputValue: '',
      user: ''
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.select.bind(this)}>查询</button>
        <input
          value={this.state.inputValue}
          onChange={this.inputChange.bind(this)}
          ref={input => {
            this.input = input
          }}
        />
        <p>结果：{this.state.user}</p>
      </div>
    )
  }

  select() {
    axios
      .get('/user/selectUser', {
        params: {
          id: this.state.inputValue
        }
      })
      .then(res => {
        this.props = res.data
        this.setState({
          user: JSON.stringify(res.data.data),
          inputValue: ''
        })
        console.log(this.state.user)
      })
      .catch(error => {
        console.log('请求数据失败:' + error)
      })
  }
  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
    console.log(this.input.value)
  }
}

export default UserInfo
