import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "./welcome.style";
import { COLORS, SIZES, icons } from '../constants';
import { AntDesign } from '@expo/vector-icons';


const jobTypes = ["Full-time", "Part-time", "Internship"];
const companies = [
  { id: 1, name: 'Google', logo: require("../assets/google.png"), job: 'Load Product Manager', description: '$8k - Hai Chau, Da Nang' },
  { id: 2, name: 'Facebook', logo: require("../assets/facebook.png") },
  { id: 3, name: 'Google', logo: require("../assets/google.png") },
  // Add more company here...
];
const renderCompanyCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.companyCard}>
      <View style={styles.cardContent}>
        <Image source={item.logo} style={styles.companyLogo} />
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>{item.name}</Text>
          <Text style={styles.jobName}>{item.job}</Text>
          <Text style={styles.jobDescription}>{item.description}</Text>
        </View>
      </View>
      <AntDesign name="hearto" size={24} color="black" style={styles.heartIcon} />
    </TouchableOpacity>
  );
};


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


      {/* Đoạn note dưới đây là 3 button Full time, Part time, Internship của project cũ*/}

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`/search/${item}`);
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

      <View style={styles.row}>
      <View style={styles.subrow}>
        <Text style={styles.boldText}>Popular Jobs</Text>      
        <Text style={styles.showAll}>Show all</Text>
      </View>

      <View>
      <FlatList
        data={companies}
        renderItem={renderCompanyCard}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.companyList}
      />
      </View>

      <View style={styles.subrow}>
        <Text style={styles.boldText}>Nearby Jobs</Text>
        <Text style={styles.showAll}>Show all</Text>
      </View>
    </View>


    </View>
  );
}

export default HomePage;
