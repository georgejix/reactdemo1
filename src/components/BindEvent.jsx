import React from 'react'

export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: '哈哈',
        }
    }

    render() {
        return <div>
            <button onClick={function () { console.log('111'); }}>按钮1</button>
            <button onClick={() => this.show('param1')}>按钮2</button>
            <h3>{this.state.msg}</h3>
            <input type="text" style={{ width: '100 %' }} value={this.state.msg} onChange={(e) => { this.textChange(e) }}></input>
            <input type="text" style={{ width: '100 %' }} value={this.state.msg} onChange={() => { this.textChange2() }} ref="txt"></input>
        </div >
    }

    //方案1，通过事件参数
    textChange = (e) => {
        this.setState({ msg: e.target.value });
    }

    //方案2，通过ref
    textChange2 = () => {
        console.log(this.refs.txt.value);
        this.setState({ msg: this.refs.txt.value });
    }

    show = (arg1) => {
        console.log('222' + arg1);
        this.setState({ msg: 'hehe' }, function () {
            console.log(this.state.msg);
        });
    }
}

/*
生命周期：
创建阶段：componentWillMount    render componentDidMount
运行阶段：属性(prop)改变：componentWIllReceiveProps 状态改变(state): shouldComponentUpdate(返回值true、false)   componentWillupdate render  componentDidUpdate
结束阶段：componentWillUnmount

*/