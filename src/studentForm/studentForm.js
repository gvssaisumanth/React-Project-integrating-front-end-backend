import React,{Component} from 'react'
import {
    Col,
    Form,   
    Button,
   Popover

  } from 'react-bootstrap';
 
import './studentForm.css'

class StudentForm extends Component{
state={
    firstName:"",
    lastName:"",
    class:"",
    yearOfpassing:"",
    percentage:"",
    validation: {},
    submit:true
}

handleChange=(inputName)=>
{ 
    return (e, data) => {
        const newState = {};
        if (e.target.value) {

             
            if(inputName === "firstName" || inputName ==="lastName" )
            {
                var letters = /^[A-Za-z]+$/;
                if( e.target.value.match(letters))
                {
                    newState[inputName] = e.target.value;
                    let validation  = {...this.state.validation}
                    if(validation[inputName]){
                        delete validation[inputName]
                    }
                    this.setState({
                        validation,
                        submit:true
                    })
                }
                else{
                    let validation  = {...this.state.validation}
                    validation[inputName] = "Please provide a valid input name. (Only alphabets are allowed)"
                    this.setState({
                        validation,
                        submit:false
                    })
                }
            }
                if(inputName === "class" )
                {   
                    if(e.target.value.match(/^[0-9a-zA-Z]+$/))
                    {        
                    newState[inputName]=e.target.value
                    let validation  = {...this.state.validation}
                    if(validation[inputName]){
                        delete validation[inputName]
                    
                    this.setState({
                        validation,
                        submit:true
                    })
                }
                }
                else{
                    let validation  = {...this.state.validation}
                    validation[inputName] = "Please provide a valid input . (Only alphabets & numbers are allowed)"
                    this.setState({
                        validation,
                        submit:false
                    })
                }

            }
               

                if(inputName === "yearOfpassing" || inputName === "percentage" )
                {
                    newState[inputName]=e.target.value
                }
          
        }
        
        else{
            newState[inputName] = ""
        } 
        this.setState(newState);
      };
      
}


render(){
    return(
<div className="form" >
    
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>FirstName</Form.Label>
      <Form.Control
         value={this.state.firstName}
       onChange={this.handleChange("firstName")}
        type="text" placeholder="max 20 characters" maxLength="20" />
        {
            this.state.validation["firstName"] && (
            <Popover style={{color:"red"}}>{this.state.validation["firstName"]}</Popover>)
        }
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Lastname</Form.Label>
      <Form.Control 
      value={this.state.lastName}
      onChange={this.handleChange("lastName")}
      type="text" placeholder="max 20 characters" maxLength="20" />
      {
        this.state.validation["lastName"] && (
        <Popover style={{color:"red"}}>{this.state.validation["lastName"]}</Popover>)
    }
    </Form.Group>
    </Form.Row>


  <Form.Row>
    <Form.Group as={Col} controlId="class">
      <Form.Label>Class</Form.Label>
      <Form.Control 
      value={this.state.class}
      onChange={this.handleChange("class")}
      type="text" />
      {
        this.state.validation["class"] && (
        <Popover style={{color:"red"}}>{this.state.validation["class"]}</Popover>)
    }
    </Form.Group>
    </Form.Row>
    

    <Form.Group controlId="yearOfpassing">
    <Form.Row>
      <Form.Label>Year of Passing</Form.Label></Form.Row>
        <Form.Control type="number" min="1990" max="2017" step="1"
         placeholder="number only"
        value={this.state.yearOfpassing}
        onChange={this.handleChange("yearOfpassing")}/>
      </Form.Group>
<Form.Row>
    <Form.Group as={Col} controlId="percentage">
      <Form.Label>Percentage</Form.Label>
      <Form.Control type="number" min="0" max="100" step="1" placeholder="number only"
      value={this.state.percentage}
      onChange={this.handleChange("percentage")}/>
    </Form.Group>
    </Form.Row>

 <Form.Row/>
<Form.Row>
  <Button disabled={!this.state.submit} style={{marginTop:"15px",fontSize:"18px",backgroundColor:"teal"}} variant="primary" type="submit">
    Submit
  </Button></Form.Row>
</Form>
    
    

</div>
        )
    }
}

export default StudentForm