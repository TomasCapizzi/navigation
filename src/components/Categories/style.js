import {StyleSheet} from 'react-native';
import theme from '../../utils/constants/theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.c5,
    marginVertical: 15,
    borderRadius: 10,
  },
  text: {
    color: theme.c3,
    fontSize: 18,
    padding: 8
  },
});

export default styles;
