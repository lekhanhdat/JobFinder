import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "./welcome.style";
import { SIZES, icons } from '../constants';

const jobTypes = ["Full-time", "Part-time", "Internship"];


const HomePage = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>

      <View style={styles.head}>          
          <Image
            style={styles.menu}
            source={require('../assets/icons/menu.png')} 
          />

          <Image
            style={styles.avatar}
            source={require('../assets/avatar.png')} 
          />
      </View>


      <View style={styles.container}>
        <Text style={styles.userName}>Hello Dat 👋</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job 🚀</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
}

export default HomePage;
