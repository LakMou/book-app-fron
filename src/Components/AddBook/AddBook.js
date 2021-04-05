// import React from 'react'
// import {Button, Modal ,Input ,Rate} from 'antd'
// import {useDispatch , useSelector} from "react-redux" 
// import axios from "axios"

// const AddBook =() =>{
//     const dispatch = useDispatch()
//     const {visible , newBook } = useSelector((state) =>state.book)

//     const postData = async(newBook) => {

//         try{
//             const response = await axios.post("http://localhost:4000/books",newBook)
//             if(!response || response.status !==201){
//                 return dispatch ({type:"SET_ERR", payload :"Failed to add"})
//                                                 }
//             console.log("RESPONSE: ",response)
//             return dispatch({type: "ADD_NEW_BOOK", payload:response.data})
//         }
//         catch(err){
//             console.log(err)
//             return dispatch({type :"SET_ERR", payload :"Failed to add"})

//         }
//     }



//     return (
//         <div>
//             <Button size="large" onClick={()=>{dispatch({type: "UPDATE_VISIBLE", payload:true})}}>
//                 Add New Book
//             </Button>
//             <Modal 
//                 title="Add New Book"
//                 visible={visible}
//                 onCancel={()=>{dispatch({type:"UPDATE_VISIBLE",payload:true})}} 
//                 onOk={()=>{
//                     postData(newBook)
//                     dispatch({type:"UPDATE_VISIBLE",payload:true})}}
//             >
//             <Input style={{margin:10}} 
//                 placeholder="Book title" size="large" 
//                 onChange={(event)=>{dispatch({type:"UPDATE_NEW_BOOK",payload:{...newBook ,title:event.target.value}})}} 
//                 value={newBook.title}
//                 />
//             <Input style={{margin:10}} placeholder="Book author" size="large" onChange={(event)=>{dispatch({type:"UPDATE_NEW_BOOK",payload:{...newBook ,author:event.target.value}})}} value={newBook.author}/>
//             <Input style={{margin:10}} placeholder="Book description" size="large" onChange={(event)=>{dispatch({type:"UPDATE_NEW_BOOK",payload:{...newBook ,description:event.target.value}})}} value={newBook.description}/>
                
//             <Rate style={{margin:10}} onChange={(value)=>{dispatch({type:"UPDATE_NEW_BOOK",payload:{...newBook ,rating:value}})}} value={newBook.rating}/>
                
//             </Modal>

//         </div>

//     )


// }
// export default AddBook


import React from "react";
import { Button, Modal, Input, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AddBook = () => {
  const dispatch = useDispatch();
  const { visible, newBook } = useSelector((state) => state.book);
  const postData = async (newBook) => {
    try {
      const response = await axios.post("http://localhost:4000/books", newBook);
      if (!response || response.status !== 201)
        return dispatch({ type: "SET_ERR", payload: "FAILED TO ADD" });
      console.log(response);
      dispatch({ type: "ADD_NEW_BOOK", payload: response.data.data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: "SET_ERR", payload: "FAILED TO ADD" });
    }
  };
  return (
    // <>
    //   <Button
    //     size="large"
    //     onClick={() => dispatch({ type: "UPDATE_VISIBLE", payload: true })}
    //   >
    //     Add New Book
    //   </Button>
    //   <Modal
    //      style={{backgroundColor:"black"}}
    //     title="Add New Book"
    //     visible={visible}
    //     onCancel={() => dispatch({ type: "UPDATE_VISIBLE", payload: false })}
    //     onOk={() => {
    //       postData(newBook);
    //       dispatch({ type: "UPDATE_VISIBLE", payload: false });
    //       //POST REQUEST
    //     }}
    //   >
    //     <Input
    //       style={{ margin: 10 }}
    //       placeholder="Book Title"
    //       size="large"
    //       onChange={(event) =>
    //         dispatch({
    //           type: "UPDATE_NEW_BOOK",
    //           payload: { ...newBook, title: event.target.value },
    //         })
    //       }
    //       value={newBook.title}
    //     />
    //     <Input
    //       style={{ margin: 10 }}
    //       placeholder="Book Author"
    //       size="large"
    //       onChange={(event) =>
    //         dispatch({
    //           type: "UPDATE_NEW_BOOK",
    //           payload: { ...newBook, author: event.target.value },
    //         })
    //       }
    //       value={newBook.author}
    //     />
    //     <Input
    //       style={{ margin: 10 }}
    //       placeholder="Book Description"
    //       size="large"
    //       onChange={(event) =>
    //         dispatch({
    //           type: "UPDATE_NEW_BOOK",
    //           payload: { ...newBook, description: event.target.value },
    //         })
    //       }
    //       value={newBook.description}
    //     />
    //     <Rate
    //       style={{ margin: 10 }}
    //       onChange={(value) =>
    //         dispatch({
    //           type: "UPDATE_NEW_BOOK",
    //           payload: { ...newBook, rating: value },
    //         })
    //       }
    //       value={newBook.rating}
    //     />
    //   </Modal>
    // </>
    <>
    //       <Button type="primary" onClick={() => dispatch({ type: "UPDATE_VISIBLE", payload: true })}>
    //         Mounir
    //       </Button>
    //       <Modal title="Basic Modal" visible={visible} >
    //         <p>Some contents...</p>
    //         <p>Some contents...</p>
    //         <p>Some contents...</p>
    //       </Modal>
    //     </>
  );
};
export default AddBook;