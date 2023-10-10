import{useCallback, useMemo, useRef, useState} from "react"
import  Content  from './Content.js'

//1. meno() ->Higher Order Component(HOC) : tránh re render các component con không mong muốn
// nó sẽ check xem component con có bị thay đổi giá trị tại props hay không 


// 2. useCallback()

//3. useMemo()

// Hooks
// HOC
// Render props

function App() {
  const[name,setName] = useState('');
  const[price,setPrice] = useState('');
  const[product,setProduct] = useState([]);
  // useCallback,memo
  //  const [count,setCount] = useState(0)

  //  const increase = useCallback( ()=>{
  //   setCount(preCount =>preCount +1)
  //  },[])
  // return (
  //   <div style={{padding:'10px 32px'}}>
  //     <Content increase={increase}/>
  //     <h1>{count}</h1>
     
  //   </div>
  // );

const nameRef = useRef()
  const handleSubmit = ()=>{
    console.log(name, price)
    setProduct([...product,{
      name,
      price: parseInt(price)
    }])
    setName('')
    setPrice('')

    nameRef.current.focus();
  }

  const total = useMemo(()=>{
    const result = product.reduce((resu,pro)=>{
        return resu + pro.price
    },0)
    return result
  },[product])
  return(
  <>
  {/* // useMemo */}
  
  <input type="text" placeholder="Enter name"
  ref={nameRef}
   value={name}
    onChange={e=>setName(e.target.value)}
  />
  <br/>
  <input type="text" placeholder="Enter price"
  value={price}
  onChange={e=>setPrice(e.target.value)}
  />
  <br/>
  <button onClick={handleSubmit}>Add</button>
  <br/>
  Total:{total}
  <ul>
    {product.map((pro,index)=>(
      <li key={index}>{pro.name} - {pro.price}</li>
    ))}
  </ul>
  </>)
  
}

export default App;
