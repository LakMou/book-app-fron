import React from 'react'
import './App.css';
import Header from '../../book-app-fron/src/Components/Header/Header'
import Books from '../../book-app-fron/src/Components/Books/Books'
import Filters from '../../book-app-fron/src/Components/Filters/Filters'
function App() {
  return (
    <div className="App">
        <Header/>
        <div className="content">
          <Filters styles={{flex:1}}/>
          <Books styles={{flex:2}}/>
        </div>
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';

// import { Modal, Button } from 'antd';
// import { useDispatch, useSelector } from "react-redux";

// const App = () => {
//   // const [isModalVisible, setIsModalVisible] = useState(false);

//   // const showModal = () => {
//   //   setIsModalVisible(true);
//   // };

//   // const handleOk = () => {
//   //   setIsModalVisible(false);
//   // };

//   // const handleCancel = () => {
//   //   setIsModalVisible(false);
//   // };

//   const dispatch = useDispatch();
//   const { visible, newBook } = useSelector((state) => state.book);

//   return (
//     <>
//       <Button type="primary" onClick={() => dispatch({ type: "UPDATE_VISIBLE", payload: true })}>
//         Mounir
//       </Button>
//       <Modal title="Basic Modal" visible={visible} >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };



// export default App 