import React from 'react';
import './ProductForm.css';

class ShortfallForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        return (
            <div className="addProductForm">
                <div className="header">
                    <p>
                        Add/Update Form
                    </p>
                </div>
                <form onSubmit={this.mySubmitHandler}>
                    <ul>
                        <li>
                            <div>Description</div>
                            <textarea />
                        </li>
                        <li>
                            <div>Buyer</div>
                            <input type="text"/>
                        </li>
                        <li>
                            <div>Division</div>
                            <input type="text"/>
                        </li>
                        <li>
                            <div>Ship Date</div>
                            <input type="text"/>
                        </li>
                        <li className="actions">
                            <a href="#">Cancel</a>
                            <button className="button">Submit</button>
                        </li>
                    </ul>
                </form>

               {/* <table id="customers">
                    <thead>
                    <tr>
                        <th>Material Category</th>
                        <th>Material Description</th>
                        <th>Reason Category</th>
                        <th>Reason Description</th>
                        <th>Qtty</th>
                        <th>Unit</th>
                        <th>Cost per unit</th>
                        <th>Total cost unit</th>
                        <th>Total cost</th>
                        <th>Approval Status</th>
                        <th>Caused by Department</th>
                        <th>Caused by Person</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>Fleece 350 gsm...</td>
                        <td>Internal mechanical</td>
                        <td></td>
                        <td>676</td>
                        <td>KGS</td>
                        <td>43</td>
                        <td>$</td>
                        <td>1849</td>
                        <td>Approved</td>
                        <td>Knitting</td>
                        <td>Jhon</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Internal Process Error</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td>Internal human error</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Not Approved</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>*/}
            </div>
        );
    }
}

export default ShortfallForm;
