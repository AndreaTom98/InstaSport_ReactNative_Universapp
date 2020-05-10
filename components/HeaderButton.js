import React from 'react';
import { Ionicons } from '@expo/vector-icons'

const HeaderButton = props => {
    const renderLeft = () => {
        return (
            <Ionicons name="md-menu" style={{marginLeft: 10}} size={32} onPress={props.onPressLeft} />
        )
    }
    const renderRight = () => {
        return (
            <Ionicons name="md-add-circle-outline" style={{marginRight: 10}} size={32} onPress={props.onPressRight} />
        )
    }
    return props.left ? renderLeft() : renderRight()

    
}

export default HeaderButton