import React from 'react';

const Footer = (props) => {
const {desc} =  props;

    return(<footer className="bg-success text-white p-5 text-center">{desc}</footer>); 
};

export default Footer;
