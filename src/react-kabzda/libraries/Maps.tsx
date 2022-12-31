import React from 'react';
import openGoogle from './../Google';
import yandex from './Yandex'

function Maps() {
    return (
        <div>
            {openGoogle()}
            {yandex()}
        </div>
    );
}

export default Maps;