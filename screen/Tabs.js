import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNotification from "./TabNotification";
import Review from './Review';
import Profile from './Profile';
import { TabIcon } from "../components"
import { COLORS, icons } from "../constants"
import StoreNavigation from "./StoreNavigation";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Store"
            screenOptions={{
                headerShown: false,
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.black,
                    borderTopColor: "transparent",
                    height: 100
                }
            }}
        >
            <Tab.Screen
                name="StoreNavigation"
                component={StoreNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="TabNotification"
                component={TabNotification}
                options={{
                    
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.noti}
                        />                    
                    ),
                    //<Icon name="rocket" size={30} color="#900" />
                    headerShown: false,
                    tabBarBadge: 1
                }}
            />
            <Tab.Screen
                name="Review"
                component={Review}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.review}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                        />
                    ),
                    headerShown: false
                }}
            />
            
        </Tab.Navigator>
    )
}

export default Tabs;
