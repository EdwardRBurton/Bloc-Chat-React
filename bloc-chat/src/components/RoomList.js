import React, { Component } from 'react';

export class RoomList extends Component {
  constructor(props){
    super(props);
      this.roomsRef = this.props.firebase.database().ref("rooms");
  }

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       this.setState({ rooms: this.state.rooms.concat( snapshot.val() ) });
     });

  render() {
    const roomList = this.stat.rooms.map(room);
    return (
      this.state ={
        rooms: []
      };
    );
  }
}
