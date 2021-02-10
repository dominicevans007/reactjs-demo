import React, {Component} from "react";

import axios from "axios";
import Product from "../Product";
import "./Products.css";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            resultLoaded: false
        }
    }

    componentDidMount() {
        this.loadItems();
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
                self.setState({products: response.data});
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    loadItems = () => {
        let self = this;
        axios.get('http://localhost:8080/product').then(function (response) {
            self.setState({resultLoaded: true, products: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        let product = (
            this.state.resultLoaded && <div className="noResult" >We were unable to locate any products matching your search. On EeBria we stock a
                great range of drinks,
                all ordered through our trade platform EeBriaTrade.com,
                so whilst we don’t have what you were looking for, why not try a similar drink from one
                of the many small independent producers listed on EeBria?</div>);
        if (this.state.products.length > 0) {
            product = this.state.products.map((product, index) => {
                return (<Product product={product} key={index}/>);
            });
        }
        const h1Style = {textAlign: 'center', margin: '50px',
                borderBottom: '1px dashed #e85032', paddingBottom: "10px", color: '#e85032'};
        return (
            <div>
                <img src="https://www.eebria.com/assets/images/v3/logo-2.png" style={{padding: "10px"}}/>
                <h1 style={h1Style}>Welcome To Eebria Products Page!</h1>
                <div className="search">
                    Search: <input type="text" onChange={this.search} placeholder="Beer/Cider"/>
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
                </div>
                {product}
            </div>
        )
    }
}

export default Products;