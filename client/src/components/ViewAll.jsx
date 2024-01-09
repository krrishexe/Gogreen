import React from 'react'
import { Link } from 'react-router-dom'

function ViewAll() {
    return (
        <div className="col-12 text-center">
            <Link to={'/shop'} className="btn alazea-btn">View Items</Link>
        </div>
    )
}

export default ViewAll
