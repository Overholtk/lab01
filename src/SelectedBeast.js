import React from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import './SelectedBeast.css'

class SelectedBeasts extends React.Component{
    render(){

        return(
            <Modal centered show={this.props.display} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beastTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image 
                        id="modalImg"
                        src={this.props.imageUrl} 
                        alt={this.props.imageText}/>
                    {this.props.imageText}
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeasts;