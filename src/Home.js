import React ,{Component} from 'react'
import './Home.css'
import {Button,Jumbotron,Row,Col} from 'react-bootstrap'

class Home extends Component{
    render(){
        return(
            <div className="container" >
                 <div className="header" >
                <h1
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  Techolutions Code Assignment <br/>
                  By: Gvs Sai Sumanth
              </h1>
              </div>
                <Jumbotron fluid style={{backgroundColor:"white",textAlign:"center"}}> 
                <Row> 
                <Col> <Button href="/studentForm" variant="primary" type="submit" style={{backgroundColor:"teal"}}>Student Form</Button></Col>
                <Col> <Button href="/resultBoard" variant="primary" type="submit" style={{backgroundColor:"teal"}}>Student Result</Button></Col>
                </Row>
                </Jumbotron>

            </div>
        )
    }
}


export default Home