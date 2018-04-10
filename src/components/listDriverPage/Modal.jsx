import React, { Component } from 'react';
import './css/Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      selectedDriver: this.props.selectedDriver
    };
    this.sendClicked = this.sendClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  sendClicked(e) {
    this.props.sendClicked(this.state);
  }
  render() {
    return (
      <div>
        <div className="overlay" />
        <div className="modal-container">
          <div className="modal-content">
            <h3 className="modalTitle">
              Message {this.props.selectedDriver.name}{" "}
            </h3>
            <textarea onChange={this.handleChange} value={this.state.message} />
            <div>
              <button className="btn-agree" onClick={this.sendClicked}>
                Send
              </button>
              <button
                className="btn-disagree"
                onClick={this.props.cancelClicked}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
