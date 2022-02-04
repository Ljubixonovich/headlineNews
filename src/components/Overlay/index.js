import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Overlay({ onPress = () => {} }) {
  return <TouchableOpacity style={styles.overlay} onPress={onPress} />
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
})
