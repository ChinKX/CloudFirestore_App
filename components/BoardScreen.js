import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Button } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';

class BoardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Board List',
      headerRight: (
        <Button
          //buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          //icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
          title={'Add Board'}
          onPress={() => { navigation.push('AddBoard') }}
        />
      ),
    };
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      boards: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards,
      isLoading: false,
   });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View>
          {
            this.state.boards.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftAvatar={{source: { uri: 'https://www.rollingstone.com/wp-content/uploads/2019/01/spiderman-trailer.jpg' }}}
                onPress={() => {
                  this.props.navigation.navigate('BoardDetails', {
                    boardkey: `${JSON.stringify(item.key)}`,
                  });
                }}
              />
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BoardScreen;
