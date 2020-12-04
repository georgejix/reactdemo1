import React from 'react'       //创建组件，虚拟dom元素，生命周期元素
import ReactDOM from 'react-dom'    //把创建好的dom组件和虚拟dom放到页面上展示

//默认，不做单独配置，不能省略.jsx后缀名
//import Hello from './components/Hello'

//@表示项目的src目录,通过在webpack配置
import Hello from '@/components/Hello'

//import '@/classtest'
//import '@/classtest2'
//import '@/继承'
import ClassComponents,{name} from '@/components/ClassComponents';

console.log(name);

const stu = {
    name: "zhangsan",
    age: 18,
}

//创建虚拟dom元素
//参数1：创建的元素类型
//参数2：对象，dom元素的属性
//参数3：子节点（其他dom元素，或者文本）
//参数n：其他子节点
const myh1 = React.createElement('h1', {id:'hh1'}, 'h1标签');

//使用reactdom把虚拟dom渲染到页面上
//参数1：要渲染的虚拟dom元素
//参数2：指定页面上一个容器
ReactDOM.render(<ClassComponents stu={stu} {...stu}/>, document.getElementById('App'))