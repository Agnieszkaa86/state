import React, { Component } from "react";

class Counter1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            name: "Sarah",
        }

        this.listRef = React.createRef()
    }
    static getDerivedStateFromProps(nextProps, prevState) {
       
        return null
    }
    componentDidMount() {
        console.log("Component Mounted")
        this.props.callWhenReady()
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("shouldComponentUpdate", {
        //     nextProps, nextState
        // })
        // if (nextState.name === this.state.name && this.state.count === nextState) {
        //     return false
        // }
        // return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", { prevProps, prevState })
        const listItemsNo = this.listRef.current.children.length
        console.log("listItemsNo: ", listItemsNo)
        return listItemsNo
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update", { prevProps, prevState })
        console.log("SNAPSHOT: ", snapshot)
    }

    render() {
        console.log("Render!!!!")
        return (
            <div>
                <h2>Counter: Name:{this.state.name}</h2>
                <h3>Current count:{this.state.count}</h3>
                <ul ref={this.listRef}>
                    {Array.from({length: this.state.count},(_, index) => {
                        return (<li key={index}>ok{index}</li>)
                    })}
                </ul>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment by 1</button>
                <button onClick={()=>this.setState({name:"john"})}>Set name to John</button>
            </div>
        )
    }
}
export default Counter1;