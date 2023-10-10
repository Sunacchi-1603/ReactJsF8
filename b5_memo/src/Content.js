import {memo} from 'react'
function Content({increase}){
    console.log("re-render")
    return (
        <>
         <h2>Hello ae</h2>
        <button onClick={increase}>Click me</button>
        </>
       
    )
}
export default memo(Content);