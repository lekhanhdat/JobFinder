import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal: 20,
  },
  head: {
    flexDirection: 'row', // Sắp xếp các phần tử trong hàng ngang
    justifyContent: 'space-between', // Canh giữa hai hình ảnh
    alignItems: 'center', // Canh chỉnh theo trục dọc
    paddingHorizontal: 20, // Thêm padding nếu cần thiết
  },
  menu: {
    marginTop: 50,  
    marginBottom: 20,  
    width: 30, 
    height: 30, 
    // borderRadius: 10, 
  },
  avatar: {
    marginTop: 60,  
    marginBottom: 20, 
    width: 60,
    height: 60,
    borderRadius: 20, // Để bo tròn hình ảnh
  },
  userName: {
    // fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  welcomeMessage: {
    // fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 28,
  },
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
    fontSize: 17,
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
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    paddingHorizontal: 20,
  },
  row: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  subrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,    
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },  
  showAll: {
    color: '#83829A',
    fontSize: 16,
  },
  companyList: {
    // paddingHorizontal: 10,    
  },
  companyCard: {
    backgroundColor: '#312651',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    width: 200,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  companyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  jobName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 14,
  },
  heartIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    // fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
