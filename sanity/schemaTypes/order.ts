import { title } from "process";

export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [ // Corrected from 'feild' to 'fields'
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'zipcode',
            title: 'Zipcode',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'food' } }],
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'number',
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number',
        },
        {
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Success", value: "success" },
                    { title: "Dispatch", value: "dispatch" },
                ],
                layout: 'radio',
            },
            initialValue: "pending",
        },
    ],
};
