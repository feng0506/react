import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  //组件第一次存在于dom中，函数不执行
  //如果已经存在于dom中，函数才执行
  UNSAFE_componentWillReceiveProps() {
    console.log('child--UNSAFE_componentWillReceiveProps------------')
  }
  //删除子组件时执行函数
  componentWillUnmount() {
    console.log('child--componentWillUnmount------------')
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}666{this.props.content}
      </li>
    )
  }
  handleClick() {
    console.log('111', this.props.index)
    this.props.deleteItem(this.props.index)
  }
}
// 父组件传来的值进行校验
XiaojiejieItem.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps = {
  avname: '6666'
}

export default XiaojiejieItem
