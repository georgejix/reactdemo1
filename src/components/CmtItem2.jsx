import React from 'react'

//导入之后，这个css是对于全局生效的,需要在webpack配置中，加入modules模块化配置参数,将id和class模块化
import objcss from '@/css/cmtitem.css'
console.log(objcss);

export default function CmtItem2(props) {
    return (
        <div className={objcss.cmtbox}>
            <h1 className={objcss.name}>评论人：{props.item.user}</h1>
            <p className={objcss.content} >评论内容：{props.item.content}</p>
        </div>
    );
}
