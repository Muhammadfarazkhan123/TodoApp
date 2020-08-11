import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList,ScrollView } from 'react-native';
import axios from 'axios'

// files
import styles from './style'
const HomeScreen = () => {
    const [itemName, setItemName] = useState()
    const [itemArr, setItemArr] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [UpdatedId, setUpdatedId] = useState()
    const [updatedItem, setUpdatedItem] = useState()
    useEffect(() => {
        axios.get('http://192.168.0.103:3001/TodoList').then(response => {
            // console.log(response.data, "response from api")
            setItemArr([...response.data])
        }).catch(err => {
            console.log(err, 'err')
        })
    }, [])

    const getItem = (text) => {
        console.log(text, "work")
        setItemName(text)
        console.log(itemArr, "itemarr")

    }

    const addItem = () => {
        axios.post('http://192.168.0.103:3001/TodoList', {
            item: itemName
        }).then(response => {
            console.log(response, "post")
            if (response.data.Posted) {
                axios.get('http://192.168.0.103:3001/TodoList').then(response => {
                    console.log(response.data, "response from api")
                    setItemArr([...response.data])
                }).catch(err => {
                    console.log(err, 'err')
                })
                setItemName("")
            }
        }).catch(err => {
            console.log(err, "error")
        })
    }

    const deleteItem = (v) => {
        console.log(v, "value")
        axios.delete('http://192.168.0.103:3001/TodoList/' + v._id).then(result => {
            console.log(result, 'result')
            if (result.data.deleted) {
                axios.get('http://192.168.0.103:3001/TodoList').then(response => {
                    console.log(response.data, "response from api")
                    setItemArr([...response.data])
                }).catch(err => {
                    console.log(err, 'err')
                })
            }
        })
            .catch(err => {
                console.log(err, 'err')

            })
    }

    const updateModal = (v) => {
        setShowModal(true)
        setUpdatedId(v._id)
    }

    const UpdateFunc = () => {
        console.log(UpdatedId, "updatedid")
        console.log("chala g")
        axios.patch('http://192.168.0.103:3001/TodoList/' + UpdatedId, {
            ItemParam: "item",
            NewItem: updatedItem
        }).then(result => {
            console.log(result)
            if (result.data.updated) {
                axios.get('http://192.168.0.103:3001/TodoList').then(response => {
                    console.log(response.data, "response from api")
                    setItemArr([...response.data])
                }).catch(err => {
                    console.log(err, 'err')
                })
                setUpdatedItem("")
                setShowModal(false)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const FlatItem = (v, i) => {
        console.log(v.item, "vvvvvvvvv")
        // let color = Math.floor(Math.random() * 16777215).toString(16);
        return (
            <View style={styles.flatListStyle} >
                <View style={styles.textStyle}>
                <Text style={styles.textTag}>{v.item}</Text>
                </View>
                <View style={styles.buttonStyle}>
                <TouchableOpacity onPress={() => { deleteItem(v) }}><Text>delete</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { updateModal(v) }}><Text>update</Text></TouchableOpacity>
                </View>
            </View>
        )
    }

    const modal = (v) => {
        return (
            <Modal
                visible={showModal}
                transparent={true}
                onRequestClose={() => {
                    setShowModal(false)
                }}
            >
                <View style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "100%", justifyContent: "center" }}>
                    <View style={{ backgroundColor: "white", minHeight: "40%", margin: "5%", borderRadius: 20, justifyContent: "space-evenly" }}>

                        <TextInput placeholder="update Item"
                            style={{ borderWidth: 1, borderRadius: 30, paddingLeft: "5%", margin: "5%" }}
                            onChangeText={(text) => { setUpdatedItem(text) }}
                            value={updatedItem}
                        />

                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => { setShowModal(false) }}><Text>Cancel</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { UpdateFunc() }}><Text>OK</Text></TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View>
            <View style={styles.inputViewStyle}>
                <TextInput placeholder="Add Item"
                    style={styles.inputStyle}
                    onChangeText={(text) => { getItem(text) }}
                    value={itemName}
                />

                <TouchableOpacity
                    onPress={() => { addItem() }}
                    style={styles.AddButton}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
            <FlatList
                data={itemArr}
                renderItem={({ item, index }) => FlatItem(item, index)}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={true}
                // style={{borderWidth:2,flex:1}}
                contentContainerStyle={{flexGrow:1}}
            />
            </View>
            {modal()}
        </View>
    )
}

export default HomeScreen