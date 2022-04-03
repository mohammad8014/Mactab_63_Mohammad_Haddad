import React, { Component } from 'react';


export default class PanelOrder extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {this.props.data.date}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {this.props.data.price}
                    </td>
                    <td className="text-center py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {this.props.data.username}
                    </td>

                </tr>
            </>

        );
    }
}
