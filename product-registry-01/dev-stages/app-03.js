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
      <div>Hello I am a product.</div>
    );
  }
}

ReactDOM.render(
  <ProductRegistry />,
  document.getElementById('content')
);