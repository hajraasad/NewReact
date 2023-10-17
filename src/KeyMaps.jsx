import React from 'react';
function KeyMaps(props) {

    const updatedNums = props.num.map((number, index) =>
        <li key={index}>
            {number}
        </li>
    );

    return (
        <ul>
            {updatedNums}
        </ul>
    );

}
export default KeyMaps;