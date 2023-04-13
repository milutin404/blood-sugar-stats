import React from 'react';
import './ActionBar.css'

function ActionBar() {


    return (
        <div className="ActionBar">
            <button type="button">Add</button>
            <button type="button">Columns</button>
            <button type="button">Highlight</button>
            <button type="button">Export</button>
            <button type="button">Settings</button>
        </div>
    );
}

export default ActionBar;