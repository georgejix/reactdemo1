import React from 'react'
import contentStyle from '@/components/CmtItemStyle'

const userStyle = { fontSize: '15px', color: 'blue' }

export default function CmtItem(props) {
    return (
        <div style={{ border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' }}>
            <h1 style={userStyle}>评论人：{props.item.user}</h1>
            <p style={contentStyle} >评论内容：{props.item.content}</p>
        </div>
    );
}
