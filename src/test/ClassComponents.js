import React, { Component } from 'react';
class ClassComponents extends Component {

    constructor() {
        super();
        this.state = {
            msg: 'state的msg变量',
        }
    }

    //外部传值，直接用this.props.取值
    render() {
        this.props.stu.name = 'lisi';
        //this.props.name = 'lisi';//报错
        return <div>
            123 {this.props.stu.name}
            <div>{this.props.name}</div>
            <div>{this.state.msg}</div>
        </div>
    }
}
export const name = '没有名字';
export default ClassComponents;