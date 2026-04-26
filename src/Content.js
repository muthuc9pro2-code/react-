import React from 'react'
import ItemList from './ItemList';


const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <div className='empty'>
                    <p>Your list is empty</p>
                </div>
            )}
        </>
    )
}


export default Content;
