import React, { Component } from 'react';
import Driver from './Driver';
import './css/TableComponent.css';

class ListDriver extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr className="table-header">
              <td>Name</td>
              <td>Phone</td>
              <td>Suspended</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.drivers.map((driver, i) => {
                return <Driver driver={driver} key={i}/>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListDriver;
