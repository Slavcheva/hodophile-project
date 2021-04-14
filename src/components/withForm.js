import React from "react";

export default function withForm(Comp, initialState, schema) {
    return class extends React.Component {
        state = {
            form: initialState,
            errors: undefined
        }
        controlChangeHandlerFactory = name => {
            return e => {
                this.setState(({form}) => {
                    return {form: {...form, [name]: e.target.value}};
                });
            }
        };

        getFormState = () => {
            return this.state.form;
        };
        getFormErrorState = () => {
            return this.state.errors;
        };

        runValidations = () => {
            return schema.validate(this.state.form, {abortEarly: false})
                .then(() => {
                    this.setState({errors: undefined});
                    return this.state.form;
                }).catch(err => {
                    const errors = err.inner.reduce((acc, {path, message}) => {
                        acc[path] = (acc[path] || []).concat(message);
                        return acc;
                    }, {});
                    this.setState({errors});
                })
        }

        render() {
            return <Comp {...this.props} controlChangeHandlerFactory={this.controlChangeHandlerFactory}
                         getFormState={this.getFormState} runValidations={this.runValidations}
                         getFormErrorState={this.getFormErrorState}/>
        }
    }
}

