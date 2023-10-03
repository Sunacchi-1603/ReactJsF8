import React, { useEffect, useState } from 'react';

// useEffect
// 1. Cập nhật lại state 
// 2. Cập nhật DOM
// 3. Render lại ui
// 4. Goi clearnup nếu deps thay đổi
// 5. Gọi useEffect callback

// 1. useEffect(callback)
 // - Gọi callback mỗi khi component re-render
 // - Gọi callback sau khi component thêm vào DOM
// 2. useEffect(callback, [])
 // - Chỉ gọi callback 1 lâng sau khi component mounted
// 3. useEffect(callback, [deps])

//---------------------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Clearup function luôn được gọi trước khi component unmounted
 // trong useEffect return ()=> clearInterval(timerId)
// 3.  Clearnup function luôn được gọi trước khi callback được gọi (settimer )(trừ lần mounted)


function Content(){
//    const [type,settype] = useState("");
//    const [post,setPosr] = useState([]);

//     useEffect(()=>{
//         fetch()
//     })
useEffect(()=>{
    return ()=>{
        avartar && URL.revokeObjectURL(avartar.review)
    } 
})
const [avartar,getAvarta] = useState()
    const handleImg = (e)=>{
           const file = e.target.files[0]
          file.review = URL.createObjectURL(file);
         getAvarta(file)
    }

    return (
        <>
         <input type='file' onChange={handleImg} width="80%" />  
        {avartar && (<img src={avartar.review}/>)}
        </>
    )


}
export default Content;