import { useEffect, useState } from "react"
import axios from 'axios';


export default function Card(){


    const [apiData, setApiData] = useState([])


useEffect(()=>{

const apifun = async ()=>{

    const api = await axios.get("https://fakestoreapi.com/products")

    setApiData(api.data)




}

apifun()


},[])

    return (

        <>
  <h2 className="text-4xl font-bold ml-10 my-10">Products</h2>      

 <div className="grid grid-cols-4 grid-rows-5 justify-items-center">

 {apiData.map((userData)=>{

return(

   <div className="col-span-1 bg-[#F8F8F8] flex flex-col items-start gap-4 max-w-[90%] rounded-2xl my-4 justify-between px-4 " key={userData.id}>
<img src={userData.image} alt="" className="w-30 object-cover ml-20 my-4 " />

{/* Card Body  */}
<div className="card-body flex flex-col gap-3 ">
    <h1 className="text-lg text-[#000000] font-bold" >{userData.title}</h1>
    <p className="line-clamp-3 text-xs text-[#000000]">{userData.description}</p>
</div>

<div className="price flex gap-4 justify-start  ">
    <p className="font-bold text-xl text-[#F15B25]">RS. {userData.price}</p>
    <span className="text-[#FFFFFF] bg-[#DE7D5A] rounded-full px-2">{userData.category}</span>
</div>
   </div>
)

 })}

 </div>
        
        </>
    )
}