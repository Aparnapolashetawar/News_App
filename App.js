import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Style';

const NewsApp = () => {
  const [myUserData, setMyUSerData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const getNewsApiData = async () => {
    try {
      const response = await fetch(
        'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json',
      );
      const data = await response.json();
      setMyUSerData(data);
      setIsLoaded(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsApiData();
  }, []);
  return (
    <View style={styles.MainContainer}>
      {isLoaded ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          {/* <LinearGradient colors={['#5a64d1', '#daf252']}> */}
          <View style={styles.appdiv}>
            <Text
              style={{
                color: '#0d0d0c',
                fontSize: 40,
                textAlign: 'center',
                fontFamily: 'monospace',
              }}>
              NEWS_APP
            </Text>
          </View>
          {/* </LinearGradient> */}
          <FlatList
            data={myUserData.articles}
            renderItem={({item}) => {
              console.log(item);
              return (
                <View style={styles.card}>
                  <View style={styles.imgContainer}>
                    <Image
                      style={styles.imgStyle}
                      resizeMode="cover"
                      source={{uri: item.urlToImage}}
                    />
                  </View>
                  <View>
                    <View style={styles.auth}>
                      <Text>Source:{item.source.name}</Text>
                    </View>
                    <View style={styles.auth}>
                      <Text>Author:{item.author}</Text>
                    </View>
                    <View style={styles.publn}>
                      <Text>Published_On:{item.publishedAt}</Text>
                    </View>
                    <View style={styles.tit}>
                      <Text>Title:{item.title}</Text>
                      {/* <Text>Description:{item.description}</Text> */}
                      {/* <Text>Content:{item.content}</Text> */}
                    </View>
                    <View style={styles.btn}>
                      <Text
                        style={{color: '#fff'}}
                        onPress={() => {
                          Linking.openURL(item.url);
                        }}>
                        Explore_News
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default NewsApp;
