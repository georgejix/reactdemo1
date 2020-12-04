import React from 'react'       //创建组件，虚拟dom元素，生命周期元素

//函数当做组件
export default function Hello(props) {
    props.stu.name =  'nameeee';
    return <p>home  {props.stu.name + props.stu.age}</p>
}

//export default Hello