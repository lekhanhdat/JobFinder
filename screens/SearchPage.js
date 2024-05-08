import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../buttons/BackButton';
import { COLORS, SIZES, icons } from '../constants';
import { AntDesign } from '@expo/vector-icons';




const jobTypes = ["Full-time", "Part-time", "Internship"];


const SearchPage = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  
    
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton></BackButton>
            <View style={{justifyContent:'center', alignItems:'center',marginTop:-5}}>
                <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 20}}>Search</Text>
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

      <View>
        <Text style={styles.Opportunity}>
        4 Job Opportunity
        </Text>
      </View>


      <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Image source={require("../assets/ig.png")} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.company}>Instagram</Text>
          <Text style={styles.jobname}>UI/UX Designer</Text>
          <Text style={styles.describe}>Full time - $8k</Text>
        </View>

        <View>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.time}>24h</Text>
        </View>
      </View>


      <View style={styles.whiteBox}>
        <Image source={require("../assets/ig.png")} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.company}>Instagram</Text>
          <Text style={styles.jobname}>UI/UX Designer</Text>
          <Text style={styles.describe}>Full time - $8k</Text>
        </View>

        <View>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.time}>24h</Text>
        </View>
      </View>


      <View style={styles.whiteBox}>
        <Image source={require("../assets/ig.png")} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.company}>Instagram</Text>
          <Text style={styles.jobname}>UI/UX Designer</Text>
          <Text style={styles.describe}>Full time - $8k</Text>
        </View>

        <View>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.time}>24h</Text>
        </View>
      </View>


      <View style={styles.whiteBox}>
        <Image source={require("../assets/ig.png")} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.company}>Instagram</Text>
          <Text style={styles.jobname}>UI/UX Designer</Text>
          <Text style={styles.describe}>Full time - $8k</Text>
        </View>

        <View>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.time}>24h</Text>
        </View>
      </View>


      
    </View>

    </SafeAreaView>
  );
}

export default SearchPage;


const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",    
    marginTop: SIZES.large,
    height: 50,
    marginHorizontal: 20,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    backgroundColor: "#E6E4E6",
  },
  searchInput: {
    // fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    fontSize: 18,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.lightWhite,
  },
  Opportunity: {
    marginHorizontal: 20,
    fontSize: 18,
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  whiteBox: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20, 
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
  },
  company: {
    fontSize: 17, 
    marginBottom: 3, 
    fontWeight: 'bold',  
  },
  jobname: {
    fontSize: 19,
    color: '#555555',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  describe: {
    fontSize: 15,
    color: '#555555',
  },
  time: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginTop: 12,
  },
});