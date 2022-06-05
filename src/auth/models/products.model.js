"use strict";


// {
//     categoryAssociation: 'Food',
//         displayName: 'orange',
//             description: 'orange for juice',
//                 price: '15$',
//                     inventoryCount: 10,
//                         image: 'https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI='

// },

const Products = (db, DataTypes) => db.define('products',

    {
        categoryAssociation: {
            type: DataTypes.STRING,
            allowNull: false
        },

        displayName: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.STRING,
        },
        inventoryCount: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        }



    }
);


module.exports = Products;