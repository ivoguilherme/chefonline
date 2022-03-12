import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'hsla(0, 0%, 84%, 1)'
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(189, 22, 22, 1)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 35,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  inputSearch: {
    width: '100%',
    paddingRight: 50
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 16
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6
  },
  productList: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})