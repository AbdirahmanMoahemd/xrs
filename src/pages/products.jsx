import React from 'react'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Products = () => {
    const onClickFn = ()=>{
        console.log('cliked')
    }
    const { currentColor } = useStateContext();
    const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Store" btnText='Add Item' currentColor={currentColor} onClick={onClickFn}/>
      <div className="table-responsive " style={{overflowX:"auto"}}>
                                        <table className="table" >
                                    <thead>
                                        <tr className="flex justify-between">
                                            <td>NAME</td>
                                            <td>IMAGE</td>
                                            <td>PRICE</td>
                                            <td>CountInStock</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        </tr>
                                    </tbody>
                                    </table>
                                    </div>
    </div>
  )
}

export default Products