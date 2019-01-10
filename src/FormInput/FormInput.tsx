import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {
    FormGroup,
    FormControl
} from "react-bootstrap";

interface FormInputProps {
    placeholder: string;
    inputType: InputType;
}

enum InputType {
    text = "text",
    number = "number",
    email = "email"
}

export class FormInput extends React.Component<FormInputProps, { value: string }> {

    constructor(props: FormInputProps, context: { value: string }) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ""
        };
    }

    // Set default properties
    static defaultProps = {
        placeholder: 'input field',
        inputType: 'text'
    };

    handleChange(e: any) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <CSSWrapper>
                <form>
                    <FormGroup controlId="formBasicText">
                        <FormControl
                            type={this.props.inputType}
                            value={this.state.value}
                            placeholder={this.props.placeholder}
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                </form>
            </CSSWrapper>
        );
    }
}

export default FormInput;
