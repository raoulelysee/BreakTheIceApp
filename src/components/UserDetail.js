import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Card, CardSection } from './common';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const UserDetail = ({ userprop }) => {
  const { name, dob, picture, location } = userprop;
  console.log(name, location, dob);
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: picture.large }} style={styles.imageStyle} />
        </View>
      </CardSection>

      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}> {name.first}, {dob.age} </Text>
          <Text> From: {location.city}</Text>
        </View>
      </CardSection>
    </Card>

  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 100,
    flex: 1,
    width: 100
  }
};

export default UserDetail;
