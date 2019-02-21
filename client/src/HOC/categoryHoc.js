import React from 'react';
import {CategoryContext} from '../contexts/CategoryContext';

const categoryHOC = (Component) => {
   return (props) => (
       <CategoryContext.Consumer>
            {({categories ,
          addItemList,
          deleteItemList,editItemList}) => {
               return <Component {...props} deleteItemList={deleteItemList}
               categories={categories} addItemList={addItemList}  editItemList={editItemList}/>
            }}
       </CategoryContext.Consumer>
   )
}
export default categoryHOC;