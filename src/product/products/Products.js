import React, {Component} from "react";
import Modal from 'react-modal';

import axios from "axios";
import Product from "../Product";
import Report from "../../reports/Report";

import "./Products.css";
import logo from '../../logo.png';
import ProductForm from "../ProductForm"; // with import
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            resultLoaded: false,
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        this.loadItems();
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    filterByType = (el) => {
        let value = el.target.value;
        if (value.length === 0) {
            this.loadItems();
            return;
        } else {
            let self = this;
            let url = `http://localhost:8080/product/price/${value}`
            axios.get(url).then(function (response) {
                self.setState({products: response.data});
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    sort = (el) => {
        let value = el.target.value;
        if (value.length === 0) {
            this.loadItems();
            return;
        } else {
            let self = this;
            let parts = value.split(":")
            let type = parts[0];
            let sort  = parts[1];
            let url = `http://localhost:8080/product/sort/${type}?order=${sort}`
            axios.get(url).then(function (response) {
                self.setState({products: response.data});
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    search = (el) => {
        let value = el.target.value;
        if (value.length === 0) {
            this.loadItems();
            return;
        }
        if (value.length > 1) {
            let self = this;
            let url = `http://localhost:8080/product/type/${value}`;
            axios.get(url).then(function (response) {
                self.setState({ "products" : response.data});
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    loadItems = () => {
        let self = this;
        axios.get('http://localhost:8080/product').then(function (response) {
            console.log("response----", response)
            self.setState({resultLoaded: true, "products" : response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        let product = (
            this.state.resultLoaded && <div className="noResult" >
                We were unable to locate any products matching your search.
            </div>);
        if (this.state.products.length > 0) {
            product = this.state.products.map((product, index) => {
                return (<Product product={product} key={index}/>);
            });
        }
        const h1Style = {textAlign: 'center', margin: '50px',
                borderBottom: '1px dashed #e85032', paddingBottom: "10px", color: '#e85032'};
        return (
            <div>
                <img src={logo} style={{padding: "10px", height: "70px"}}/>
                <Router>
                    <div>
                        <Link to="/report" className="reportBtn">View Reports</Link>
                        <Switch>
                            <Route exact path="/report">
                                <Report />
                            </Route>
                        </Switch>
                    </div>
                </Router>
                <h1 style={h1Style}>Welcome To Page!</h1>
                <div className="search">
                    Search: <input type="text" onChange={this.search} placeholder="Cheese/Almonds"/>
                    &nbsp;
                    Sort By:
                    <select onChange={this.sort}>
                        <option value="">Select...</option>
                        <option value="name:asc">Name: Ascending</option>
                        <option value="name:desc">Name: Descending</option>
                        <option value="price:asc">Price: Ascending</option>
                        <option value="price:desc">Price: Descending</option>
                    </select>
                    &nbsp;
                    Type:
                    <select onChange={this.filterByType}>
                        <option value="">Select...</option>
                        <option value="cheaper">Budget</option>
                        <option value="expensive">Expensive</option>
                    </select>
                    <button className="addProductBtn" onClick={e => {
                        this.handleOpenModal(e);
                    }}>Add Product</button>
                    <Modal isOpen={this.state.showModal} style={customStyles}>
                        <ProductForm />
                    </Modal>
                </div>
                {product}
            </div>
        )
    }
}

export default Products;
