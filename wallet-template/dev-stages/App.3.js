import React, { Component } from 'react';
import logo from './blg.jpg';
import './App.css';
// Import the web3 library
import Web3 from 'web3';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

// Import build Artifacts
import tokenArtifacts from './build/contracts/Token.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      availableAccounts: [],
      defaultAccount: 0,
      rate: 1,
      tokenSymbol: 0,
      token: null, // token contract
    };
  }

  async componentDidMount() {
    // Create a web3 connection
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    this.web3.version.getNetwork(async (err, netId) => {
      const tokenAddress = tokenArtifacts.networks[netId].address;
      const token = this.web3.eth.contract(tokenArtifacts.abi).at(tokenAddress);
      this.setState({ token });
      console.log(token);

      // Set token symbol below
      const tokenSymbol = await token.symbol();
      this.setState({ tokenSymbol });

      // Set wei / token rate below
      const rate = await token.rate();
      this.setState({ rate: rate.toNumber() });

      this.web3.eth.getAccounts((err, accounts) => {
        // Append all available accounts
        for (let i = 0; i < accounts.length; i++) {
          this.setState({
            availableAccounts: this.state.availableAccounts.concat(
              <MenuItem value={i} key={accounts[i]} primaryText={accounts[i]} />
            )
          });
        }
      });
    });
  }

  // Load the accounts token and ether balances.
  loadAccountBalances(account) {


  }

  // Create listeners for all events.
  loadEventListeners() {


  }

  // Buy new tokens with eth
  buy(amount) {


  }

  // Transfer tokens to a user
  transfer(user, amount) {


  }

  // When a new account in selected in the available accounts drop down.
  handleDropDownChange = (event, index, defaultAccount) => {
    this.setState({ defaultAccount });

  }

  render() {
    let component;

    component = <div>
      <h3>Active Account</h3>
      <DropDownMenu maxHeight={300} width={500} value={this.state.defaultAccount} onChange={this.handleDropDownChange}>
        {this.state.availableAccounts}
      </DropDownMenu>
      <h3>Balances</h3>
      <p className="App-intro">{this.state.ethBalance / 1e18} ETH</p>
      <p className="App-intro"> {this.state.tokenBalance} {this.state.tokenSymbol}</p>
      <br />
      <div>
        <h3>Buy Tokens</h3>
        <h5>Rate: {this.state.rate} {this.state.tokenSymbol} / wei</h5>
        <TextField floatingLabelText="Token Amount." style={{width: 200}} value={this.state.amount}
          onChange={(e, amount) => {this.setState({ amount })}}
        />
        <RaisedButton label="Buy" labelPosition="before" primary={true}
          onClick={() => this.buy(this.state.amount/this.state.rate)}
        />
      </div>
      <br />
      
    </div>

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" style={{height: '150px', width: '350px'}}/>
          </header>
          {component}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
