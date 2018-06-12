import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Input, Button, Label } from 'reactstrap';

import toastr from 'toastr';
import 'toastr/build/toastr.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class InputText extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <div>
                <FormGroup row>
                    <Col lg={2}>
                        <Input type="text" innerRef={(input) => (this.input = input)}/>
                    </Col>
                    <Col lg={1}>
                        <Button color='primary' onClick={(e) => this.onChangeText(e)}>입력</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col lg={2}>
                        <Label>입력 값 : </Label> {this.props.text}
                    </Col>
                </FormGroup>
            </div>
        );
    }

    onChangeText(t) {
        toastr.options = {
            closeButton: true,
            showMethod: 'fadeIn',
            onclick: () => {console.log("click!!")}
        }
        toastr.info("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        toastr.error("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        toastr.warning("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        toastr.success("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

        const text = this.input.value;
        console.time("test")
        if(text.length === 0){
            toastr.error("Null Text!!")
            return;
        }
        // const node = findDOMNode(this.refs.input);
        // const text = node.value.trim();
        console.log("onChangeText : " + text)
        this.props.onSetChangeText(text);
        console.timeEnd("test")
    }
}


InputText.propTypes = {
    text: PropTypes.string
};

export default InputText;