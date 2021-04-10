import React, {Component} from "react";

export default function withForm(Comp, initialState, schema){
    return class extends Component{
        state={
            form:initialState,
            error:null
        }
        controlChangeHandlerFactory = name => e => {
                    this.setState(({form}) => {
                        return {form: {...form, [name]: e.target.value}};
                    });
            };

        getFormState = () => {
            return this.state.form;
        };
        render() {
            return <Comp {...this.props} controlChangeHandlerFactory={this.controlChangeHandlerFactory}
    getFormState={this.getFormState} />
        }
    }
}