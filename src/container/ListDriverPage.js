import React, { Component } from 'react';
import listDriverJson from '../drivers.json';
import ListDriver from '../components/listDriverPage/ListDriver';
import Modal from '../components/listDriverPage/Modal'
import { connect } from 'react-redux';
import { selectDriver, updateDriver, loadDrivers } from '../actions/postActions';
import PropTypes from 'prop-types';

class ListDriverPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      drivers: [],
      selectedDriver : {},
      isShown : false
    }
    // this.notifyClicked = this.notifyClicked.bind(this);
    this.sendClicked = this.sendClicked.bind(this);
    this.cancelClicked = this.cancelClicked.bind(this);
  }

  // notifyClicked(e){
  //   console.log("notify container clicked");
  //   this.setState({
  //       isShown : true,
  //       selectedDriver : e
  //   })
  // }
  sendClicked(e){
    console.log("send container clicked");
    // submit api here, if success then make isShown false
    this.props.updateDriver(this.state.selectedDriver)
    this.setState({
        isShown : false
    })
    alert("Message = " + e.message);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps = " + JSON.stringify(nextProps.state.selectedDriver));
    console.log("nextProps is modal shown  = " + JSON.stringify(nextProps.state.selectedDriver.isModalShown));
    if (nextProps.state.selectedDriver) {
      this.setState({
        isShown : nextProps.state.selectedDriver.isModalShown,
        selectedDriver : nextProps.state.selectedDriver.selectedDriver
    })
    }

  }

  cancelClicked(e){
    console.log("cancel container clicked");
    this.setState({
        isShown : false
    })
  }

  componentDidMount(){
    this.getDrivers();
  }

  getDrivers(){
    if (typeof this.props.state.selectedDriver.drivers === 'undefined') {
      this.props.loadDrivers(listDriverJson.drivers)
    }
    if (typeof this.props.state.selectedDriver.drivers !== 'undefined') {
      this.setState({ drivers: this.props.state.selectedDriver.drivers })
    }
  }

  render() {

    return typeof this.props.state.selectedDriver.drivers !== 'undefined' ? (
      <div>
        {
            <ListDriver drivers={this.props.state.selectedDriver.drivers}/>
        }
        {
            this.state.isShown ? <Modal selectedDriver = {this.state.selectedDriver}
            sendClicked={this.sendClicked} cancelClicked={this.cancelClicked}/> : null
        }
      </div>
    ) : null;
  }
}

ListDriverPage.propTypes = {
  selectDriver: PropTypes.func.isRequired,
  selectedDriver: PropTypes.object
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, { selectDriver, updateDriver, loadDrivers })(ListDriverPage);;
