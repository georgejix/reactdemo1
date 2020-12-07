import React from 'react'       //创建组件，虚拟dom元素，生命周期元素
import ReactDOM from 'react-dom'    //把创建好的dom组件和虚拟dom放到页面上展示

import CmtList2 from '@/components/CmtList2';
import BindEvent from '@/components/BindEvent';


//使用reactdom把虚拟dom渲染到页面上
//参数1：要渲染的虚拟dom元素
//参数2：指定页面上一个容器
ReactDOM.render(
    <div>
        <BindEvent />
        <CmtList2 />
    </div>
    , document.getElementById('App'))