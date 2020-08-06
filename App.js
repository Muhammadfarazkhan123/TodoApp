import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'


const App = () => {
  useEffect(()=>{
    // axios.get('http://192.168.0.110:3001/TodoList').then(response=>{
    //   console.log(response.data,"response from api")
    //   response.data.map(v=>{
    //     console.log(v,'array')
    //   })
    // }).catch(err=>{
    //   console.log(err,'err')
    // })
    // axios.post('http://192.168.0.110:3001/TodoList',{
    //   item:"saad baglol"
    // }).then(response=>{
    //   console.log(response,"post")
    // }).catch(err=>{
    //   console.log(err,"error")
    // })

    // axios.delete('http://192.168.0.110:3001/TodoList/5f2bf15f0bd9d019b4e97893').then(result=>{
    //   console.log(result,'result')
    // })
    // .catch(err=>{
    //   console.log(err,'err')

    // })
    // 5f2bd54e267432256c83c03a
    axios.patch('http://192.168.0.110:3001/TodoList/5f2bd54e267432256c83c03a',{
      ItemParam:"item",
      NewItem:"saad baglol"
    }).then(result=>{
      console.log(result)
    }).catch(err=>{
      console.log(err)
    })
    },[])
  return (
    <View>
      <Text>TodoApp</Text>
    </View>
  )
}

export default App