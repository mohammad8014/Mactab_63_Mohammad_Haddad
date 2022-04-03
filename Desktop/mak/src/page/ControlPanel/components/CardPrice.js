import React, { Component } from 'react';


export default class CardPrice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {this.props.data.price}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        خاکستری
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {this.props.data.category}
                    </td>
                    <td className="text-center py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {this.props.data.firstName}
                    </td>
                    <td className="text-center py-4  text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <img src={`http://localhost:3002/files/${this.props.data.image}`} alt="#" class="  object-center object-cover table-img" />
                    </td>
                </tr>
            </>

        );
    }
}
