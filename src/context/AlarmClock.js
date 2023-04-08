import React from "react";
class AlarmClock extends React.Component {
    constructor() {
      super();
      this.state = {
        currentTime: '',
        alarmTime: ''
      };
      this.setAlarmTime = this.setAlarmTime.bind(this);
    }
  
    componentDidMount(){
      this.clock = setInterval(
        () => this.setCurrentTime(),
        1000
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      1000)
    }
  
    componentWillUnmount(){
      clearInterval(this.clock);
      clearInterval(this.interval);
    }
  
    setCurrentTime(){
      this.setState({
        currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
    }
  
    setAlarmTime(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }
  
    checkAlarmClock(){
      if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
        this.alarmMessage = "Molimo Vas postavite vrijeme na alarm. ";
      } else {
        this.alarmMessage = "Vaš alarm je postavljen na " + this.state.alarmTime + ".";
        if(this.state.currentTime === this.state.alarmTime) {
          alert("Vaša hrana je gotova! ");
        } else {
          console.log("ne brini još ");
        }
      }   
    }
  
    render() {
      return (
        
        <div>
          <center>
          <h1>Alarm za hranu</h1>
          <h2>Trenutno vrijeme je {this.state.currentTime}.
          </h2>
          <h2>{this.alarmMessage}
          </h2>
          <form>
            <input type="time" onChange={this.setAlarmTime}></input>
          </form>
          </center>
        </div>

      );
    }
  }
  
export default AlarmClock;