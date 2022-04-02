import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
       /*  if (prevProps.counter.value !== this.props.counter.value) {
            make an ajax call and get new data from the server
        } */
    }

    componentWillUnmount() {
        console.log('Counter unmount');
    }
    // state = {
        // value: this.props.counter.value,
        // tags: ['tag1', 'tag2', 'tag3']
        // imageUrl: 'https://picsum.photos/200'
    // };

    /* styles = {
        fontSize: 50,
        fontWeight: 'bold'
    }; */

    /* renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        } else {
           return (
           <ul>
               {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
           </ul>
           );
        }
    } */

    /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */
    // you can use an arrow function instead of rebinding every event manually

   // handleIncrement = (product) => {
        // console.log(product);
        // this.state.count++;
        // won't work because react won't know count is increasing
        // this.setState({value: this.state.value + 1});
    // }

   /*  doHandleIncrement = () => {
        this.handleIncrement({id: 1});
    } */

    render() { 
        // let classes = this.getBadgeClasses();
        // console.log(this.props);

        return (
        <React.Fragment>
            {/* <img src={this.state.imageUrl} /> */}
            {/* {this.props.children} */}
            <span /* style={{fontSize: 30}} */ className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => {this.props.onIncrement(this.props.counter)}} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => {this.props.onDelete(this.props.counter.id)}} className="btn btn-danger btn-sm m-2">Delete</button>
            <br />
            {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()} */}
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

// can also use div instead of React.Fragment
 
export default Counter;
