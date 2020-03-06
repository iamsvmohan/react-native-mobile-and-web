// import React, { Component } from 'react';
// import { StyleSheet, Dimensions, Text, Image, View, Platform, Keyboard, FlatList, ScrollView } from 'react-native'
// import { Header, Card, ListItem, Button, Badge,Icon } from 'react-native-elements'
// const { height: screenHeight } = Dimensions.get('window');
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
// const list = [
//     {
//         title: 'HEADER',
//         icon: 'av-timer'
//     },
//     {
//         title: 'TDW2',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW3',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW4',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW1',
//         icon: 'av-timer'
//     },
//     {
//         title: 'TDW2',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW3',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW4',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW1',
//         icon: 'av-timer'
//     },
//     {
//         title: 'TDW2',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW3',
//         icon: 'flight-takeoff'
//     },
//     {
//         title: 'TDW4',
//         icon: 'flight-takeoff'
//     },
// ]


// export default class PodList extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//             stickyHeaderIndices: []
//         }
//     }

//     componentDidMount() {
//         // var arr = [];
//         // list.map(obj => {
//         //     if (obj.header) {
//         //         arr.push(list.indexOf(obj));
//         //     }
//         // });
//         // arr.push(0);
//         // this.setState({
//         //     stickyHeaderIndices: arr
//         // });
//     }
//     render() {
//         const styles = Platform.OS === ('android' || 'ios') ? androidStyles : WebStyles;
//         return (
//             <>
//                 <Header
//                     leftComponent={{ icon: 'menu', color: '#fff' }}
//                     centerComponent={{ text: 'POD LIST', style: { color: '#fff' } }}
//                     rightComponent={{ icon: 'home', color: '#fff' }}
//                 />
//                 <View style={styles.container}>
//                     <View style={styles.viewWidth}>
//                             {/* {
//                                 list.map((item, i) => (
//                                     <ListItem
//                                         key={i}
//                                         // component={<><Text>yeey</Text></>}
//                                         title={item.title}
//                                         // leftIcon={{ name: item.icon }}
//                                         bottomDivider
//                                         containerStyle={{ margin: 5 }}
//                                         // chevron
//                                         rightElement={<Badge
//                                             badgeStyle={{ width: 30, height: 25, borderRadius: 10 }}
//                                             value={20}
//                                             status="success"
//                                             size="large"
//                                         // containerStyle={{ position: 'absolute' }}
//                                         />}

//                                     />
//                                     // <Header
//                                     //     // statusBarProps={{ barStyle: 'light-content' }}
//                                     //     // barStyle="light-content" // or directly
//                                     //     leftComponent={{ text: 'MY TITLE', style: { color: '#000' } }}
//                                     //     rightComponent={
//                                     //         <Badge
//                                     //             badgeStyle={{ width: 30, height: 25, borderRadius: 10 }}
//                                     //             value={20}
//                                     //             status="success"
//                                     //             size="large"
//                                     //         // containerStyle={{ position: 'absolute' }}
//                                     //         />
//                                     //     }
//                                     //     centerComponent={{ text: 'MY TITLE', style: { color: '#000' } }}
//                                     //     containerStyle={{
//                                     //         backgroundColor: '#fff',
//                                     //         // padding:20,
//                                     //         justifyContent: 'space-around',
//                                     //         borderWidth: 1,
//                                     //         borderColor: 'gray',
//                                     //         marginBottom:20
//                                     //     }}
//                                     // />
//                                     // badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}

//                                     // />
//                                 ))
//                             } */}
//                             <FlatList
//                                 stickyHeaderIndices={[0]}
//                                 ListHeaderComponent={
//                                     <Card>
//                                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                             <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}>POD Pending List</Text>
//                                         </View>
//                                     </Card>}
//                                 data={list}
//                                 renderItem={({ item }) =>
//                                     <Card>
//                                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                             <Text style={{ marginBottom: 10 }}>{item.title}</Text>
//                                             <Text style={{ marginBottom: 10 }}>CNI</Text>
//                                             <Badge
//                                                 badgeStyle={{ width: 30, height: 25, borderRadius: 10 }}
//                                                 value={20}
//                                                 status="success"
//                                                 size="large"
//                                             // containerStyle={{ position: 'absolute' }}
//                                             />
//                                         </View>

//                                     </Card>
//                                 }
//                             />

//                         </View>
//                 </View>
//             </>

//         );
//     }
// }




import React, { Component } from 'react';import 
{ StyleSheet,Platform} from 'react-native'

import { Container, Header, Content, List, ListItem, Text, View, Body, Left, Right, Icon, Title } from 'native-base';
import { Badge } from 'react-native-elements'

const list = [
    {
        title: 'HEADER',
        icon: 'av-timer'
    },
    {
        title: 'TDW2',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW3',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW4',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW1',
        icon: 'av-timer'
    },
    {
        title: 'TDW2',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW3',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW4',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW1',
        icon: 'av-timer'
    },
    {
        title: 'TDW2',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW3',
        icon: 'flight-takeoff'
    },
    {
        title: 'TDW4',
        icon: 'flight-takeoff'
    },
]


export default class ListHeaderExample extends Component {
    render() {
        const styles = Platform.OS === 'web' ?WebStyles: androidStyles ;
        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1 }}>
                        {/* <Icon name="arrow-back" /> */}
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title style={{ alignSelf: "center" }}>POD List</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        {/* <Icon name="menu" /> */}
                    </Right>
                </Header>
                <Content>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <View style={styles.viewWidth}>
                            <List>
                                <ListItem itemHeader first>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>POD Pending List</Text>
                                </ListItem>
                                {list.map((li) => {
                                    return (
                                        <ListItem 
                                        onPress={() => {
                                            this.props.navigation.navigate('PodSubmitForm');
                                          }}>
                                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text></Text>
                                                <Text>{li.title}</Text>
                                            </View> */}
                                            <Left>
                                                <Text>{li.title}</Text>
                                            </Left>
                                            <Body>
                                                <Text>CNI</Text>
                                            </Body>
                                            <Right>
                                                <Badge
                                                    badgeStyle={{ width: 30, height: 25, borderRadius: 10 }}
                                                    value={20}
                                                    status="success"
                                                    size="large"
                                                // containerStyle={{ position: 'absolute' }}
                                                />
                                            </Right>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}

const WebStyles = StyleSheet.create({
    viewWidth: { width: '50%' }

})
const androidStyles = StyleSheet.create({
    viewWidth: { width: '100%' }

});