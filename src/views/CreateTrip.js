import React from 'react'

class CreateTrip extends React.Component {
    state = {
        post: ''
    }

    changeHandler = (event) => (
        this.setState({value: event.target.value})
    )
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.value)
    }

    render() {
        return (
            <div className="form-wrapper">
            <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                    <h2>Разкажете ни за вашето пътешествие...</h2>
                    <textarea value={this.state.value} onChange={this.changeHandler}/>
                </div>
                <div className='form-group'>
                    <h2>Споделете полезни съвети...</h2>
                    <textarea value={this.state.value} onChange={this.changeHandler}/>
                </div>
                <div className="file-upload">
                    <h2>Покажете ни вашите снимки...</h2>
                    <label htmlFor="inputFile">Може да качите само 10 снимки</label>
                    <input type="file"/>
                </div>
                <button type="button">Submit</button>
            </form>
            </div>
        )
    }
}
export default CreateTrip