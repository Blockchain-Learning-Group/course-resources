class ProductRegistry extends React.Component {
  render() {
    const product = Seed.products[0];

    return (
      <div className='ui unstackable items'>
        <Product
          title={product.title}
          description={product.description}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src={this.props.submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductRegistry />,
  document.getElementById('content')
);