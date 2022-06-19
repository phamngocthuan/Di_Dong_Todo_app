import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 3,
  },
  dateItem: {
    borderWidth: 2,
    borderColor: '#717273',
    borderRadius: 10,
    width: 110,
    height: 43,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  dateItemSelect: {
    borderWidth: 2,
    borderColor: '#3D4F52',
    borderRadius: 10,
    width: 110,
    height: 43,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F7D4B0',
    fontWeight: 'bold',
    color: '#243235',
    fontSize: 17,
  },
  parentDateTime: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10
  },
  categoryItemSelect: {
    borderWidth: 2,
    borderColor: '#3D4F52',
    borderRadius: 10,
    width: 110,
    height: 43,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F7D4B0',
    fontWeight: 'bold',
    color: '#243235',
    fontSize: 17,
    margin: 2
  },
  categoryItem: {
    borderWidth: 2,
    borderColor: '#717273',
    borderRadius: 10,
    width: 110,
    height: 43,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: 2
  },
});

export default styles;