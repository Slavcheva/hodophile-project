import React from 'react'
import withForm from "../components/withForm";

class CreateTrip extends React.Component {
    state = {
        post: ''
    }
    descriptionChangeHandler = this.props.controlChangeHandlerFactory('description');
    tipsChangeHandler = this.props.controlChangeHandlerFactory('tips');

    // changeHandler = (event) => (
    //     this.setState({value: event.target.value})
    // )
    submitHandler = (event) => {
        // event.preventDefault();
        const {description, tips} = this.props.getFormState()
        console.log(description, tips)
    }

    render() {
        const {description, tips} = this.props.getFormState()
        return (

            <div className="form-wrapper">
            <form >
                <div className='form-group'>
                    <h2>Разкажете ни за вашето пътешествие...</h2>
                    <textarea value={description} onChange={this.descriptionChangeHandler}/>
                </div>
                <div className='form-group'>
                    <h2>Споделете полезни съвети...</h2>
                    <textarea value={tips} onChange={this.tipsChangeHandler}/>
                </div>
                {/*<div className="file-upload">*/}
                {/*    <h2>Покажете ни вашите снимки...</h2>*/}
                {/*    <label htmlFor="inputFile">Може да качите само 10 снимки</label>*/}
                {/*    <input type="file"/>*/}
                {/*</div>*/}
                <button type="button" onSubmit={this.submitHandler}>Submit</button>
            </form>
            </div>
        )
    }
}

const initialFormState = {
    description: '',
    tips: '',
}
export default withForm(CreateTrip, initialFormState)
