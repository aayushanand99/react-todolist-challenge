import React, { Component } from 'react';

import './App.css';

import List from './components/list';
import Input from './components/input';
import Button from './components/button';
import { connect } from "react-redux";
import { addItem } from './actions/index'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
    }
    UNSAFE_componentWillReceiveProps(props) {
        console.log(props)
    }

    add_Pressed() {
        this.setState({item:''})
        this.props.addItem({ item: this.state.item })
    }

    render() {
        return (
            <div className="container">

                <h1>Todo List</h1>

                <div className='add-item-to-list'>
                    <Input
                        name='item'
                        placeholder='New Item...'
                        onChange={(text) => {
                            this.setState({ item: text })
                        }}
                        value={this.state.item}
                    />
                    <Button onClick={() => this.add_Pressed()} type='add'>
                        Add
                    </Button>
                </div>

                <List items={this.props.list} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    //whatever is returned wil show up as props
    return {
        list: state.list
    }
}
function mapDispatchToProps(dispatch) {
    //whatever is returned wil show up as props
    return {
        addItem: function (params) {
            dispatch(addItem(params));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
