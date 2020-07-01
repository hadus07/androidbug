import privateKey from './env';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Anatha, Utils, KeyPairSigner} from 'anatha-sdk';

export default class App extends Component {
  client = new Anatha({
    chainId: 'remotenet',
    signer: new KeyPairSigner(privateKey),
    nodeUrl: 'http://node-0.testnet.space:26657/',
    indexerEndpoint: 'https://indexer.testnet.space/api/v1',
    notificationServiceEndpoint: 'https://notification.testnet.space/',
  });

  state = {res: '', err: ''};

  componentDidMount() {
    this.loadPrice();
  }

  loadPrice = async () => {
    try {
      let dinPrice = await this.client.query.getPrice('1anatha');
      let usdPrice = Utils.fromDin(dinPrice[0].amount, 'usd');
      let currencyPrice = parseFloat(usdPrice);
      this.setState({res: currencyPrice});
    } catch (err) {
      this.setState({err: JSON.stringify(err, null, 2)});
    }
  };

  render() {
    const {res, err} = this.state;
    return (
      <View style={styles.cont}>
        {res ? <Text style={styles.res}>{res}</Text> : null}
        {err ? <Text style={styles.err}>{err}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  res: {
    color: 'darkblue',
  },
  err: {
    color: 'tomato',
  },
});
