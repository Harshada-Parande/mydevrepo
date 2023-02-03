import React from "react"

const TableData=({getData,deleteFun,editFun,displayData})=>{
    console.log(getData)
    return(
        <>
            <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>status</th>
                      <th>action</th>
                </tr>
            </thead>
            <tbody>
{
    getData.length ? (
        
            getData.map((item,index)=>{
              return(
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.Title}</td>
                <td>{item.status}</td>
                <td>{item.Description}</td>
                <td></td>
                <td>
                   <button onClick={()=>deleteFun(item.id)}>delete</button>
                   <button onClick={()=>editFun(item)}>edit</button>
                   <button onClick={()=>displayData(item)}>view</button>
                </td>

                </tr>
              )

            })
        
    ):(
        <tr>no records found</tr>
      
       
    )
}
            </tbody>
        </table>
  
        </>
    )
}

export default TableData