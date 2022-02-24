// import React from 'react';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Item extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<>

            <Link to='/ProductPage' className=' w-4/12  flex flex-col'>

                <div className='w-4/12 mr-8  flex flex-col'>
                    <div class="w-96   min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img src={`http://localhost:3002/files/${this.props.data.image}`} alt="#" class="w-64 h-96 object-center object-cover lg:w-full lg:h-full" width="100px" />
                    </div>
                    <div>
                        <h3 className='text-right w-full'>{this.props.data.price}</h3>
                        <p className='text-green-700 text-right'>{this.props.data.price}</p>
                    </div>
                </div>

            </Link>


        </>);
    }


}



export { Item };










