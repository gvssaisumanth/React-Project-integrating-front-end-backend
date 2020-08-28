import React, {Component} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import './studentDetails.css'

class ResultBoard extends Component{


    state={
        data:{},
        formattedData:{}
        
    }

    componentDidMount()
    {
        axios.get("http://127.0.0.1:8080/get-marks").then(result=>this.setState({data:result.data.data},this.formatObject))
        .catch(
            res=>res
        ) 
    }

    formatObject=()=>
    { const  {data}=this.state
        
        
        data.sort((a, b)=>{
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1 
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    })
    this.setState({data:data})
}

    
    Resulttable=()=>{
        
    if(this.state.data.length)
    {
        const markCheck=[]
        this.state.data.map((data,index)=>{
            const totalmarks=parseInt(data.marks.Maths)+parseInt(data.marks.English)+parseInt(data.marks.Science)
            markCheck.push(totalmarks)
        })
        

        
        return(
    
            <Table responsive="md" bordered>
                <thead>
                <tr>
                <th colSpan={4}><b>Students​ ​Result​ ​Board</b></th> </tr>
                    
                </thead>
                <thead>
        
                    <tr>
                    <th><strong><em>Student Name</em></strong></th>
                    <th><strong><em>RollNumber</em></strong></th>
                    <th><strong><em>Total Marks</em></strong></th>
                    <th><strong><em>Status</em></strong></th>
                    </tr>
                </thead>
                
                {this.state.data.map((data,index)=>{
                    const highIndex= markCheck.indexOf(Math.max(...markCheck))
                    const totalmarks=parseInt(data.marks.Maths)+parseInt(data.marks.English)+parseInt(data.marks.Science) 
                    const maths=parseInt(data.marks.Maths)
                    const english=parseInt(data.marks.English)
                    const science=parseInt(data.marks.Science)
                    return(
                        <tr key={index}>
                        <td>{data.name.charAt(0).toUpperCase()+data.name.slice(1)}</td>
                        <td>{data.rollNumber}</td>
                         <td>{totalmarks}</td>
                         {maths<20 || english<20 || science<20 ?<td style={{color:"red"}}>fail</td> :(index===highIndex ?<td style={{color:"green"}}>Topper</td>:<td>pass</td>)}
                        </tr>
                        
                    )
                })}
        </Table>
                )
            }
else{
    return(
        <h1>loading</h1>
    )
}
        
    
    }
   
    render()
 { 
    
    
    return(
        <div className="container">
        
        {this.state.data && this.Resulttable()}
        </div>)
    
    
    }
}


export default ResultBoard