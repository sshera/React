import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, onDelete, onIncrement, counters} = this.props;
        return (
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={/* this.props. */onReset}>Reset</button><br />
            {counters.map(counter =>
            <Counter key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                counter={counter} /* selected={true} */>
                {/* <h4>Counter #{counter.id}</h4> */}
            </Counter>)}
        </div>
        );
    }
}
 
export default Counters;