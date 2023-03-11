import React, { Component } from 'react'
import './style.less'

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    )
  }
}

class ProductRow extends Component {
  render() {
    const product = this.props.product
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    )

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly

    const rows = []
    let lastCategory = null

    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return
      }
      if (inStockOnly && !product.stocked) {
        return
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        )
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class SearchBar extends Component {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value)
  }

  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false
  }
  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div className="filterable-product-table">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable
