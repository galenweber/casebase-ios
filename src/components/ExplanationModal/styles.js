import { StyleSheet } from 'react-native';

const styles = {
  body: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 22,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },

  scrollBody: {
    paddingBottom: 110,
  },

  button: {
    paddingTop: 5,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d6d7da',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.75,
  }

};

export default StyleSheet.create(styles);
