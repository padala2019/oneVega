// import { StyleSheet, Text, View } from 'react-native';
// import React, { useState, createContext } from 'react';

// // export const UserContext = createContext({
// //   user: null,
// //   setUser: () => {},
// // });
// // export const UserProvider = ({ children }: any) => {
// //   const [user, setUser] = useState<any>({
// //     name: 'ABC',
// //     email: 'guest@gmail.com',
// //   });
// //   return (
// //     <UserContext.Provider value={{ user, setUser }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // };

// const Obj1 = {
//   name: 'ABC',
//   email: 'abc@gmail.com',
// };

// const ObjChild1 = {
//   name: 'ABC_child',
//   email: 'abc_child@gmail.com',
// };

// export const UserContext = createContext(Obj1);
// export const UserContextChild = createContext(ObjChild1);

// export const UserProvider = ({ children }: any) => {
//   return <UserContext.Provider value={Obj1}>{children}</UserContext.Provider>;
// };

// export const UserContextChildProvider = ({ children }: any) => {
//   return (
//     <UserContextChild.Provider value={ObjChild1}>
//       {children}
//     </UserContextChild.Provider>
//   );
// };

// src/context/MyContext.js

// src/context/MyContext.js
import React, { createContext, useState } from 'react';

const MyContext: any = createContext(''); // Create the context

const MyContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any>('Initial Data'); // State to hold the context value

  const updateData = (newValue: any) => {
    setData(newValue); // Function to update the context value
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
