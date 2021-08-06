import { createAction } from "@reduxjs/toolkit"



export const dataAction = createAction('list/Data')


// export const logTimeActions = {
//     dataAction:
//      (dataItem) => ({type: 'LIST_DATA', payload:{...dataItem}}),
// }
// export const logTimeActions = (dataItem) => {
//     return {
//       type: 'LIST_DATA',
//       payload: {
//        ...dataItem
//       },
//     };
//   };
