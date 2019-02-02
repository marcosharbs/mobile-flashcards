import React from 'react'
import { WHITE, PURPLE } from '../../assets/colors'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export function PrimaryButton({ label, onPress, disabled = false }) {
    return (
        <TouchableOpacity
            style={disabled ? styles.disabled : styles.enabled}
            onPress={onPress}
            disabled={disabled}
        >
            <View style={styles.btPrimary} >
                <Text style={styles.textPrimary}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export function DefaultButton({ label, onPress, disabled = false }) {
    return (
        <TouchableOpacity
            style={disabled ? styles.disabled : styles.enabled}
            onPress={onPress}
            disabled={disabled}
        >
            <View style={styles.btDefault} >
                <Text style={styles.textDefault}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btPrimary: {
        margin: 15,
        padding: 20,
        backgroundColor: PURPLE,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPrimary: {
        fontSize: 20,
        color: WHITE
    },
    btDefault: {
        margin: 15,
        padding: 20,
        backgroundColor: WHITE,
        borderRadius: 4,
        borderColor: PURPLE,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDefault: {
        fontSize: 20
    },
    enabled: {
        opacity: 1,
    },
    disabled: {
        opacity: 0.3,
    }
})