import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import AddProduct from './components/AddProduct'
import ListProduct from './components/ListProducts'
import ModalDelete from './components/ModalDelete'

const Desafio = () => {

  const [newProductTitle, setNewProductTitle] = useState('')
  const [newProductPrice, setNewProductPrice] = useState('')
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handlerAdd = () => {

    const newProduct = {
      id: uuid.v4(),
      title: newProductTitle,
      price: newProductPrice
    }

    setProducts(current => [...current, newProduct])
    setNewProductTitle('')
    setNewProductPrice('')

  }

  const handlerModal = (item) => {
    if (item) {
      setSelectedProduct(item)
      setModalVisible(true)} 
      else 
      setModalVisible(false)
  }

  const handlerDelete = () => {
    setProducts(current => current.filter(product => product.id !== selectedProduct.id))
    setModalVisible(false)
  }

  return  <View  style={styles.container}>
              <AddProduct
                valueTitle = {newProductTitle}
                valuePrice = {newProductPrice}
                onChangeTitle = {setNewProductTitle}
                onChangePrice = {setNewProductPrice}
                addProduct = {handlerAdd}
              />
              <ListProduct
                products = {products}
                onModal = {handlerModal}
              />
              <ModalDelete
                product = {selectedProduct}
                visible={modalVisible}
                onModal = {handlerModal}
                onDelete={handlerDelete}
              />
           </View>
}

export default Desafio

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"start",
      alignItems:"center",
      marginTop:30
    }
})