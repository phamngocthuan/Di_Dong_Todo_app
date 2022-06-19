import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'white'
  },
  homeTop: {
    flex: 2,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },
  homeTopLeft: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeTopRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  avatar: {
    marginLeft: 15,
    width: 60,
    height: 60
  },
  notification: {
    width: 40,
    height: 40
  },
  search: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 15
  },
  infoAccount: {
    paddingLeft: 10,
  },
  menu: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItem: {
    width: "82%",
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,

  },
  menuItemIcon: {
    display: 'inline-block',
  },
  menuItemContent: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  addwork: {
    width: 70,
    height: 70,
    position: 'relative',
    top: 3
  }
});

export default styles;