import React from 'react'

export default class Class extends ClassComp {
    constructor(props) {
        super(props) 
        this.state={
            fname: 'Masai',
            lname: 'School'
        }
        console.log(this.state.fname, this.state.lname)
    }
    componentDidUpdate() {
        console.log('First name is:', this.state.fname)
    }
    componentWillUnmount() {
        console.log("Last name is:", this.state.lname)
    }
    componentDidMount() {
        console.log("Welcome to Masai")
    }
    render() {
        console.log("Full name is", `${this.state.fname} ${this.state.lname}`)
        return (
            <div>
                WELCOME
            </div>
        )
    }
}
