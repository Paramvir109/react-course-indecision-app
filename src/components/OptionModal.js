import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal//These two props are necessary for rendering Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        onRequestClose={props.handleClearSelectedOption}//When user presses esc key or click outside the modal
        ariaHideApp={false}//To remove the warning occurring
        closeTimeoutMS={200}//Before closing it would stay .2 secs
        className="modal"
    >
        <h3 className="modal__title">Selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)
export default OptionModal