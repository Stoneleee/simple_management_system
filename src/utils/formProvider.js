/**
 * Created by Stoneleee on 2017/8/25.
 */
import React, { Component } from 'react';

function formProvider (fields) {
    return function (Comp) {

        const initialFormState = {};
        for (const key in fields) {
            initialFormState[key] = {
                value: fields[key].defaultValue,
                error: ''
            };
        }

        class FormComponent extends Component {
            constructor (props) {
                super(props);
                this.state = {
                    form: initialFormState,
                    formValid: false
                };
            }

            handleValueChange = (fieldName, value) => {
                const {form} = this.state;
                const newFieldState = {value, valid: true, error: ''};
                const fieldRules = fields[fieldName].rules;
                for(let i = 0; i < fieldRules.length; i++){
                    const {pattern, error} = fieldRules[i];
                    let valid = false;
                    if(typeof pattern === 'function') {
                        valid = pattern(value);
                    } else {
                        valid = pattern.test(value);
                    }

                    if (!valid) {
                        newFieldState.valid = false;
                        newFieldState.error = error;
                        break;
                    }
                }

                const newForm = { ...form, [fieldName]: newFieldState};
                const formValid = Object.values(newForm).every(f => f.valid);

                this.setState({
                    form: newForm,
                    formValid,
                });
            };

            reset = () => {
                this.setState({
                    form: initialFormState,
                });
            };

            render () {
                const { form, formValid } = this.state;
                return <Comp { ...this.proprs } form={form} formValid={formValid} onFormChange={this.handleValueChange} onReset={this.reset} />
            }
        }

        return FormComponent;
    }
}
export default formProvider;