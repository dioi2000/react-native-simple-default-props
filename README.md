# react-native-simple-default-props #
Simplest way to set default props of any react-native components even Custom Component

### Motivation ###
react-native-global-props has not update since Oct 2018  
It's useful but not work in some cases and import every single function for each component are not smart  
So I used my own version  
  
recently I thouhgt someone has same needs,  
I hope react-native-simple-default-props could help you

### Installation ###
```bash
npm i react-native-simple-default-props
or
yarn add react-native-simple-default-props
```

### Usage ###
```js
// import
import setDefaultProps from 'react-native-simple-default-props'

// use
setDefaultProps(Component, props)
```

### Example ###
```js
import React from 'react';
import {Text, TextInput, SafeAreaView} from 'react-native';
import setDefaultProps from 'react-native-simple-default-props'

const defaultText = {
  style: [{color: 'orange'}, {fontSize: 30}],
};

// usage
setDefaultProps(Text, defaultText);
setDefaultProps(TextInput, {
  underlineColorAndroid: 'transparent',
  placeholder: 'this is placeholder',
  style: {
    fontSize: 30,
    padding: 0,
  },
});

// work with Custom Component also
const CustomComponent = ({text = '', ...props}) => {
  return (
    <SafeAreaView {...props}>
      <Text>{text}</Text>
    </SafeAreaView>
  );
};

setDefaultProps(CustomComponent, {style: {backgroundColor: 'lightgreen'}});

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>TEXT</Text>
      <TextInput />
      <CustomComponent text="CustomComponent1" />
      <CustomComponent text="CustomComponent2" />
    </SafeAreaView>
  );
};

export default App;
```

- Example Image
<img src="https://i.postimg.cc/HWv6L1FK/sample-image.png" width="292.5" height="633">
