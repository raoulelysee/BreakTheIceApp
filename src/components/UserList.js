import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import UserDetail2 from './UserDetail2';

class UserList extends Component {

  state = { albums: [] };

  componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      }

      renderAlbums() {
        return this.state.albums.map(album =>
          <UserDetail2 key={album.title} albumprop={album} />
        );
      }

  render() {
    console.log(this.state);

    return (
    <ScrollView style={{flex: 1}}>
      {this.renderAlbums()}
    </ScrollView>
  );
  }
  }

export default UserList;
