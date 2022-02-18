// import React from 'react';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Item extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<>

            <div className='w-4/12  flex flex-col'>
                <div class="w-96   min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={this.props.data.courseImage} alt="#" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div>
                    <h3>{this.props.data.title}</h3>
                    <p className='text-green-700'>{this.props.data.price}</p>
                </div>
            </div>




        </>);
    }


}



export { Item };








