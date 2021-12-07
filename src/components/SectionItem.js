import React from 'react';
const SectionItem = () => {
    return (
        <div className ="col mb-5">
        <div className ="card h-100"> 
            <tr>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn   btn-outline-dark btn-sm mx-3 my-3">New</button>
                    </div>
                </td>
            </tr>                       
            <img className ="card-img-top" src="https://www.ulcdn.net/images/products/94258/original/Apollo_Infinite_FNSF51APDU30000SAAAA.jpg?1467963840" alt="..." />                      
            <div className ="card-body p-4">
                <div className ="text-center justify-content-center">                              
                    <h5 className ="fw-bolder">Chair</h5>                               
                    <tr>
                            <td>⭐ ⭐ ⭐ ⭐ ☆</td>
                            <td>
                                <div class="btn-group justify-content-center" role="group" aria-label="Basic outlined example">
                                    <button type="button" class="btn btn-outline-dark btn-sm">$90.85</button>
                                    <button type="button" class="btn btn-outline-dark btn-sm">Buy</button>
                                </div>
                            </td>
                    </tr>
                </div>
            </div>                      
        </div>
    </div>
    );
}
export default SectionItem ;