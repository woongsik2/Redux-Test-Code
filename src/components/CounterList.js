import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';


const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    console.log(counters)
    const counterList = counters.map(
        (counter, i) => (
            <Counter key={i} index={i} {...counter} onIncrement={onIncrement} onDecrement={onDecrement} onSetColor={onSetColor}/>
        )
    )
    return (
        <div>
            {counterList}
        </div>
    )
}

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func

};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => { console.warn('onIncrement') },
    onDecrement: () => { console.warn('onDecrement') },
    onSetColor: () => { console.warn('onSetColor') }
}

export default CounterList;