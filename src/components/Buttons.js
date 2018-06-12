import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

// import './Buttons.css';


const Buttons = ({onCreate, onRemove}) => {
    return(
        <div>
            <Button onClick={onCreate}>생성</Button>
            <Button onClick={onRemove}>제거</Button>
        </div>
    )
}

Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
}

Buttons.defaultProps = {
    onCreate: () => { console.warn('not onCreate') },
    onRemove: () => { console.warn('not onRemove') }
}

export default Buttons;