import React from 'react';



class PhotoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
}
