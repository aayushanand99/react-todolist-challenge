import React, { Component } from "react";

import './index.css';
import Button from '../button';
import { connect } from "react-redux";
import {deleteItem,editItem,getItems} from '../../actions'


class List extends Component {

    componentDidMount(){
        this.props.getItems()
    }

    renderListItem() {
        let arr = []
        this.props.items.map((item, index) => {
            arr.push(<tr>
                <td>{item.item_name}</td>
                <td>
                    <Button type='edit' onClick={()=>this.editPressed(index,item)}>
                        Edit
                            </Button>
                    <Button type='delete' onClick={()=>{this.props.deleteItem({index})}}>
                        Delete
                            </Button>
                </td>
            </tr>)
        })
        return arr
    }

    editPressed(index,item){
        let msg=prompt('Please enter the edited Text',item)
        this.props.editItem({index,msg})
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th width='66%'>Item</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {this.renderListItem()}

                </tbody>
            </table>
        );
    }
}
function mapStateToProps(state) {
    //whatever is returned wil show up as props
    return {
        list : state.list.items
    }
}
function mapDispatchToProps(dispatch) {
    //whatever is returned wil show up as props
    return {
        deleteItem: function (params) {
            dispatch(deleteItem(params));
        },
       editItem: function (params) {
            dispatch(editItem(params));
        },
       getItems: function () {
           dispatch(getItems());
       },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
