import React, { Component } from 'react'
import CmtItem from '@/components/CmtItem'
class CmtList extends Component {

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
            <h1 style={{ color: 'red', fontSize: '25px', textAlign: "center" }}>评论列表</h1>
            {this.state.CommenList.map(item => <CmtItem item={item} key={item.id} />)}
        </div>
    }
}

export default CmtList;