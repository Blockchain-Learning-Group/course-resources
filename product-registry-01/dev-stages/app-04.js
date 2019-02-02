class ProductRegistry extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        Hello, I am your first React component!
        <Product />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='images/products/image-aqua.png' />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>YOUR NAME</a>
            <p>NEW FANCY PRODUCT OF YOUR OWN</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src='images/avatars/liz.png' />
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