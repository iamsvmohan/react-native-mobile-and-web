// import React, { Component } from 'react';
// import { StyleSheet, Dimensions, Text, Image, View, Platform, Keyboard, ScrollView, Button } from 'react-native'
// import { Header, Card, ListItem, Icon } from 'react-native-elements'
// // import Icon from 'react-native-vector-icons/AntDesign'
// const { height: screenHeight } = Dimensions.get('window');

// const initialState = {
//     username: "",
//     password: ""
// }
// const topics = [
//     {
//         title: 'POD',
//     },
//     {
//         title: 'Claim',
//     },
//     {
//         title: 'Status',
//     },
//     {
//         title: 'Settings',
//     },
//     {
//         title: 'Check',
//     },
//     {
//         title: 'Help',
//     },
// ]

// export default class Home extends Component {
//     state = initialState
//     render() {
//         const styles = Platform.OS === ('android' || 'ios') ? androidStyles : WebStyles;
//         return (
//             <>
//                 <Header
//                     leftComponent={{ icon: 'menu', color: '#fff' }}
//                     centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
//                     rightComponent={{ icon: 'home', color: '#fff' }}
//                 />
//                 <View style={styles.container}>
//                     <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
//                         <Text style={{ fontSize: 15, fontWeight: '500' }}>Welcome</Text>
//                         <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Preethi</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, marginTop: 10 }}>
//                         <Text style={{ fontSize: 15, fontWeight: '500' }}>Last logged in</Text>
//                         <Text style={{ fontSize: 16, fontWeight: 'bold' }}> 2-1-2020 12.00PM</Text>
//                     </View>

//                     <ScrollView contentContainerStyle={styles.scrollViewStyle}>
//                         {/* <View style={{alignItems:'center',justifyContent:'center'}}> */}


//                         {topics.map((u, i) => {
//                             return (
//                                 <Card
//                                     containerStyle={styles.cardWidth}>
//                                     <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold', color: '#000' }}>
//                                         {u.title}</Text>
//                                     {/*<Button
//                                         // icon={<Icon name='code' color='#ffffff' />}
//                                         buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, }}
//                                         titleStyle={{fontSize:15}}
//                                         title=' VIEW NOW' /> */}
//                                 </Card>
//                             )
//                         })}
//                         {/* </View> */}
//                     </ScrollView>
//                     <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'flex-end', margin: 20 }}>
//                         <Button
//                             color="#5cb85c"
//                             onPress={() => {
//                                 this.props.navigation.navigate('Home');
//                             }}
//                             title="Logout"
//                         />
//                     </View>
//                 </View>
//             </>

//         );
//     }
// }

// const WebStyles = StyleSheet.create({
//     container: { flex: 1, height: screenHeight, justifyContent: 'center', alignItems: 'center' },
//     inputStyle: { height: 40, width: '30%', borderColor: 'gray', borderWidth: 1, padding: 20 },
//     buttonParentView: { flexDirection: 'row', width: '20%', justifyContent: 'space-between', marginTop: 40 },
//     cardWidth: { width: 200, justifyContent: 'center', alignItems: 'center' },
//     scrollViewStyle: { width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' },

// });


// const androidStyles = StyleSheet.create({
//     container: { flex: 1, height: screenHeight, alignItems: 'center', justifyContent: 'center' },
//     inputStyle: { height: 50, width: '80%', borderColor: 'gray', borderWidth: 1, padding: 10 },
//     buttonParentView: { flexDirection: 'row', width: '60%', justifyContent: 'space-between', marginTop: 40 },
//     cardWidth: { width: 150, height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0275d8' },
//     scrollViewStyle: { width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginTop: '5%' },

// });

import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Platform,TouchableOpacity } from 'react-native'

import { Container, Header, Content, Card, CardItem, Body, Text, View, Left, Right, Icon, Button, Title } from 'native-base';
const { height: screenHeight } = Dimensions.get('window');
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const topics = [
    {
        title: 'POD',
    },
    {
        title: 'Claim',
    },
    {
        title: 'Status',
    },
    {
        title: 'Settings',
    },
    {
        title: 'Check',
    },
    {
        title: 'Help',
    },
]
export default class CardExample extends Component {
    render() {
        const styles = Platform.OS === 'web' ? WebStyles : androidStyles;

        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1 }}>
                        {/* <Icon name="arrow-back" /> */}
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title style={{ alignSelf: "center" }}>Home</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        {/* <Icon name="menu" /> */}
                    </Right>
                </Header>
                <Content>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>Welcome</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Preethi</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>Last logged in</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}> 2-1-2020 12.00PM</Text>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.subView}>
                            {topics.map((topic) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('PodList')}}>
                                    <Card button={true} 
                                      style={styles.cardStyle}>
                                        <CardItem style={{ backgroundColor: '#0275d8',justifyContent:'center',alignItems:'center' }}>
                                            {/* <Left/>
                                            <Body> */}
                                                <Text style={{ fontSize: 13, fontWeight: 'bold',color:"#fff",flexDirection:'row' }}>
                                                    {topic.title}
                                                </Text>
                                            {/* </Body>
                                            <Right/> */}
                                        </CardItem>
                                    </Card>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}} style={styles.logout}>
                        <Button block success >
                            <Text style={{fontWeight:'bold'}}>Logout</Text>
                        </Button>
                    </TouchableOpacity>

                </Content>
            </Container>

        );
    }
}


const WebStyles = StyleSheet.create({
    mainView: { justifyContent: 'center', alignItems: 'center' },
    subView: { flexDirection: 'row', width: '30%', flexWrap: 'wrap', justifyContent: 'space-between' },
    cardStyle: {  backgroundColor: '#0275d8',alignItems: 'center', justifyContent: 'center', width: 200, height: 120, marginBottom: 50 },
    logout: { width: '95%', flexDirection: 'row', justifyContent: 'flex-end', margin: 20 }
});


const androidStyles = StyleSheet.create({
    mainView: { width: '100%', justifyContent: 'center', alignItems: 'center' },
    subView: { flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 25 },
    cardStyle: { backgroundColor: '#0275d8' , alignItems: 'center', justifyContent: 'center', width: 150, height: 100, marginBottom: 30 },
    logout: { width: '95%', flexDirection: 'row', justifyContent: 'flex-end', marginRight: 40, marginBottom: 20 }
});
