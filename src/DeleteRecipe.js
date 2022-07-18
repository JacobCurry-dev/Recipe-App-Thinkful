import React from 'react';

const DeleteButton = ({ recipes, setRecipes, index }) => {
    const handleDelete = (targetIndex) => {
        setRecipes(recipes.filter((_, index) => index !== targetIndex));
    }
    return (<button name='delete' onClick = {() => handleDelete(index)}>Delete</button>)
}

export default DeleteButton;