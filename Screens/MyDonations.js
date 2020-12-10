import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DrawerItems } from 'react-navigation-drawer'
import db from '../config'
export default class Donations extends Component {

    constructor() {
        super();
        this.state = {
            allDonations: []
        }
    }

    getDonationDetails = () => {
        db.collections("allDonations").onSnapshot((snapshot) => {
            var allDonations = snapshot.docs.map((document) => { document.data() });
            this.setState({
                allDonations: allDonations
            })
        });
    }

    componentDidMount() {
        this.getDonationDetails();
    }

    render() {
        return (
            <View>
                <MyHeader navigation={this.props.navigation} title="Donations" />
                <FlatList>

                </FlatList>
            </View>
        )
    }
}