import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonate from '../Screens/bookDonate.js'
import BookRequest from '../Screens/bookRequest.js'

export const AppTabNavigator = createBottomTabNavigator({
	donateBooks:{screen:BookDonate,
	navigationOptions : {
		tabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:25,height:25}}/>,
		tabBarLabel:"Donate Books"
	}
	},
	requestBooks:{screen:BookRequest,
	navigationOptions : {
		tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:25,height:25}}/>,
		tabBarLabel:"Request Books"
	}}
})