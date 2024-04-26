import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, }}>
            <View style={{ marginTop: 10, alignItems: 'center'  }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.black }}>
                    Profile
                </Text>
            </View>

            <View style={{
                    position: 'absolute',
                    top: 60,
                    left: 0,
                    right: 0,
                    backgroundColor: '#FAFAFA',
                    borderRadius: 20,
                    padding: 20,   
                    marginHorizontal: 30                                   
                }}>

                <View style={styles.container}>

                  <View style={styles.avatarContainer}>

                    <Image
                      style={styles.avatar}
                      source={ require("../assets/avatar.png") } // Thay link_to_your_image bằng đường dẫn của ảnh đại diện của người dùng
                    />                    

                  </View>


                  <View style={{ marginTop: 12, marginBottom: 1, alignItems: 'center' }}>
                      <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: COLORS.black,
                        marginBottom: 4
                        }}>
                          User name
                      </Text>     

                      <Text style={{
                        fontSize: 20,                        
                        color: '#83829A',
                        marginBottom: 12
                        }}>
                          User mail
                      </Text>                         

                      <Text style={{
                        fontSize: 20,                        
                        color: COLORS.maugach,
                        marginBottom: 4,
                        fontWeight: 'bold',
                        }}>
                          31
                      </Text> 

                      <Text style={{
                        fontSize: 20,                        
                        color: COLORS.black,
                        marginBottom: 4
                        }}>
                          Applied
                      </Text> 

                  </View> 

                </View>

            </View>

            <View style={{ marginTop: 12, marginBottom: 22,  }}>
              <Text style={{
                fontSize: 20,
                color: '#B7B7B7',
                marginTop: 300,
                marginBottom: 4,
                marginHorizontal: 30 
                }}>
                  ACCOUNT
              </Text>  
            </View>            

        </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',        
  },
  avatarContainer: {
    backgroundColor: '#ccc', // Màu nền của vòng tròn
    borderRadius: 100, // Độ cong của góc để tạo thành vòng tròn
    width: 100, // Đường kính của vòng tròn
    height: 100, // Đường kính của vòng tròn
    overflow: 'hidden', // Chỉ hiển thị phần ảnh bên trong vòng tròn
  },
  avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})