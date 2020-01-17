import React, { Component } from 'react';
import fetch from 'cross-fetch';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
class DispPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: "",
            firstName: "",
            lastName: "",
            skills: "",
            result: [],
            dat: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGetAll = this.handleGetAll.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.empId.sort())
        fetch('http://localhost:9081/get/' + this.state.empId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    result: [],
                    dat: data
                })
            })
            .then(console.log(this.state.dat));

    }
    handleGetAll(event) {
        event.preventDefault();
        fetch('http://localhost:9081/getAll')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    dat: {},
                    result: data,
                    empId: ""
                })
            })
            .then(console.log(this.state.result));
    }
    handleDelete(event){
    event.preventDefault();
    fetch('http://localhost:9081/delete/'+this.state.empId)
    .then(response => response.json())
    .then(data=>{
    console.log(data);
    this.setState({
    dat:data
    })
    })
    .then(console.log(this.state.dat));

    }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <br />
                            <label>
                                EmpId:
                   <input className="form-control" type="text" name="empId" value={this.state.empId} onChange={this.handleChange} />
                            </label><br></br>
                        </div><br />
                        <div>
                        <Button variant="contained" color="primary" type="submit">
                            Get Employee Data
                </Button> &nbsp;&nbsp;
                        <Button variant="contained" color="primary" onClick={this.handleGetAll} >
                            Get All Employees Data
                </Button> &nbsp;&nbsp;
                        <Button variant="contained" color="primary" onClick={this.handleDelete} >
                            Delete
                </Button>
                        </div>
                        <div>
                        </div>
                    </form>
                </div>
                <div align='center'>
                    <h2>Results</h2>
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell  >EmpId</TableCell>
                                    <TableCell  >First name</TableCell>
                                    <TableCell >Last Name</TableCell>
                                    <TableCell >Skills</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell >{this.state.dat.empId}</TableCell>
                                    <TableCell >{this.state.dat.firstName}</TableCell>
                                    <TableCell >{this.state.dat.lastName}</TableCell>
                                    <TableCell >{this.state.dat.skills}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div align='center'>
                    <h2>All Results</h2>
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell  >Empid</TableCell>
                                    <TableCell  >First name</TableCell>
                                    <TableCell >Last Name</TableCell>
                                    <TableCell >Skills</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.result.map((row) => (
                                    <TableRow key={row.empId}>
                                        <TableCell >{row.empId}</TableCell>
                                        <TableCell >{row.firstName}</TableCell>
                                        <TableCell >{row.lastName}</TableCell>
                                        <TableCell >{row.skills}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>
        )
    }
}
export default DispPage;
