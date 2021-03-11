import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategories = ({ setCategories }) => {

    const [imputValue, setimputValue] = useState("");

    const handleImputChange = (e) => {
        setimputValue(e.target.value)
    }

    const handleSubbmit = (e) => {
        e.preventDefault()

        if (imputValue.trim().length > 2) {

            setCategories(cats => [imputValue,...cats]);
            setimputValue("");
        }
    }

    return (
        <form onSubmit={handleSubbmit}>
            <input
                type="text"
                value={imputValue}
                onChange={handleImputChange}
            />
        </form>
    )
}

AddCategories.propTypes ={
    setCategories: PropTypes.func.isRequired
}

