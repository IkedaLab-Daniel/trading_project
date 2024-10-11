import React, { useState } from 'react'
function Modal(){
    const [toggle, setToggle] = useState({display:'block'})

    function toggleClose(){
        setToggle(prev => ({
            ...prev,
            display: 'none',
        }))
    }

    return(
        <>
            <div id="modal-shadow" style={toggle}></div>
            <div id="modal" style={toggle}>
                <p><b>Status:</b> Under development</p>
                <p><b>Total days of development:</b> 1 night</p>
                <p><b>Total Updates:</b> 1 </p>
                <br/>
                <p><b>状态</b>：正在开发</p>
                <p><b>开发总天数：</b>1 晚</p>
                <p><b>总更新数:</b> 1 </p>


                <p className="close"  onClick={toggleClose}>Close | 关闭</p>
            </div>
        </>
        
    )
}

export default Modal