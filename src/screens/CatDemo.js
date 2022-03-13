
import React,{useState,useMemo} from 'react'
import { View, Text, StyleSheet,Button,FlatList} from 'react-native'
import categories from '../../const/categories';
import foods from '../../const/foods';

function Item(props) {
    return (
      <View style={styles.item}>
        <Text>{props.item.id}: {props.item.Title} ({props.item.Status})</Text>
      </View>
    );
  }

const CatDemo = () => {
const [fullList, setFullList] = useState([
  { "id":28, "Title":"Sweden", "Status":1 },
    { "id":56, "Title":"USA", "Status":1 },
    { "id":89, "Title":"England", "Status":1 },
    { "id":89, "Title":"England", "Status":2 },
    { "id":89, "Title":"England", "Status":2 },
    { "id":89, "Title":"England", "Status":3 } 
 
   
  ]);

  const [status, setStatus] = useState('NONE')

  const filteredList = useMemo(
    () => {
      if (status === 'NONE' ) return fullList
      return fullList.filter(item => status === item.Status)
    },
    [status, fullList]
  )
  const onClick = (status) => () => {
      setStatus(status)
  }
  return (
    <View style={styles.container}>
      <Text>Selected Status: {status}</Text>
      <View style={styles.filterBar}>
        <Button title="Clear" onPress={onClick('NONE')} />
        <Button title="Status 1" onPress={onClick(1)} />
        <Button title="Status 2" onPress={onClick(2)} />
        <Button title="Status 3" onPress={onClick(3)} />
      </View>
      <FlatList
        style={styles.list}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        data={filteredList}
      />
    </View>
  );
};

export default CatDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:50,
    padding: 8,
    backgroundColor: 'white',
  },
  list: {
    height: '100%',
    width: '100%'
  },
  filterBar: {
      flexDirection: 'row',
      // flex: 0.2,
      height: 40,
  },
  item: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 8,
    backgroundColor: 'white',
  }
});

    


