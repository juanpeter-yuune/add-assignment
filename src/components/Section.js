import React from 'react';
import SectionItem from './SectionItem';
const Section = () =>{
    return (
            <div className ="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                <SectionItem/>
                <SectionItem/>
                <SectionItem/>
            </div>
    );
}
export default Section;