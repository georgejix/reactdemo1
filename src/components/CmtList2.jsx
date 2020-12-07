import React, { Component } from 'react'
import CmtItem2 from '@/components/CmtItem2'

//直接写包名开始，默认先去node_modules目录下寻找
import 'bootstrap/dist/css/bootstrap.css'

import objcss from '@/css/cmtlist.scss'
console.log(objcss);

class CmtList2 extends Component {

    constructor() {
        super();
        this.state = {
            CommenList: [
                { id: 1, user: '张三', content: '哈哈' },
                { id: 2, user: '李四', content: '嘿嘿' },
                { id: 3, user: '王五', content: '哦哦' },
                { id: 4, user: '张菊', content: '嗯嗯' },
                { id: 5, user: '李英', content: '呵呵' },
            ]
        }
    }
    render() {
        return <div>
            <h1 id={objcss.cmtTitle}>评论列表</h1>
            {this.state.CommenList.map(item => <CmtItem2 item={item} key={item.id} />)}
            <button className="btn btn-primary">按钮</button>
        </div>
    }
}

export default CmtList2;