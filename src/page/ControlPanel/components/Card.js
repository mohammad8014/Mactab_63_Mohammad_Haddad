import React, { Component } from 'react';


export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">ویرایش</span><span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">حذف</span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        خاکستری
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        Laptop
                    </td>
                    <td className="text-center py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {this.props.data.namKala}
                    </td>

                </tr>
            </>

        );
    }
}
