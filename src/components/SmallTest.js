import React from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';

export default class SmallTest extends React.Component{

    //State goes here

    render() {

        return (
            <div>
                <HeaderComponent />
                <BodyComponent />
                <FooterComponent />
            </div>
        )
    }
}