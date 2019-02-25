import React from 'react';
import {CategoryContext} from '../contexts/CategoryContext';

const AdminPanelHOC = (Component) => {
   return (props) => (
       <CategoryContext.Consumer>
            {({categories ,
            authors,
          addItemList,
          deleteItemList,editItemList}) => {
               return <Component {...props} authors={authors} deleteItemList={deleteItemList}
               categories={categories} addItemList={addItemList}  editItemList={editItemList}/>
            }}
       </CategoryContext.Consumer>
   )
}
export default AdminPanelHOC;