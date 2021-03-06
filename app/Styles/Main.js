/**
 * Created By KonishiLee
 */
'use strict';


import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Global from './Global';

let styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingBottom: 6,
    paddingTop: 6,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
  },
  itemHeader: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: Global.colorStyle,
  },
  redText: {
    color: '#999',
    fontSize: 15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    width: 99,
    height: 138,
    margin: 6,
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26,
  },

  bodyContainer: {
    paddingTop: 60,
    paddingBottom: 60,
  },

  container: {
    backgroundColor: 'white',
    flex: 1
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 20,
    color: Global.colorStyle,
  },

  labelText: {
    fontSize: 16,
    color: Global.colorStyle,
  },

  metaText: {
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'rgba(0, 0, 0, 0.6)',
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 5,

  },

  pt: {
    paddingTop: 10
  },

  pr: {
    paddingRight: 10
  },

  pl: {
    paddingLeft: 10
  },

  pb: {
    paddingBottom: 10
  },

  p10: {
    padding: 10
  },

  pt5: {
    paddingTop: 5
  },

  mt: {
    marginTop: 10
  },

  textCenter: {
    alignItems: 'center'
  },

  bb: {
    borderBottomWidth: 1,
    borderColor: Global.colorStyle,
  }
});

export { styles as default };
