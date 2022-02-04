import React from 'react'
import { StyleSheet, ActivityIndicator as RN_ActivityIndicator } from 'react-native'
import Colors from '../../library/colors'

export default function ActivityIndicator() {
  return <RN_ActivityIndicator color={Colors.black} style={styles.ai} />
}

const styles = StyleSheet.create({
  ai: { ...StyleSheet.absoluteFillObject },
})
