// import React, { Component } from 'react';
// import { Container, Header, Content, List,Accordion, ListItem, Text, View, Body, Left, Right, Icon, Title, Card, CardItem } from 'native-base';
// import { Badge } from 'react-native-elements'
// const dataArray = [
//     { title: "First Element", content: "Lorem ipsum dolor sit amet" },
//     { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
//     { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
//   ];

// export default class ListHeaderExample extends Component {
//     render() {
//         return (
//             <Container>
//                 <Header>
//                     <Left style={{ flex: 1 }}>
//                         {/* <Icon name="arrow-back" /> */}
//                     </Left>
//                     <Body style={{ flex: 1 }}>
//                         <Title style={{ alignSelf: "center" }}>POD Submission</Title>
//                     </Body>
//                     <Right style={{ flex: 1 }}>
//                         {/* <Icon name="menu" /> */}
//                     </Right>
//                 </Header>
//                 <Content>
//                     <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
//                         <View style={{ width: '80%' }}>
//                         <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
//                             <Card>
//                                 <CardItem header>
//                                     <Left style={{justifyContent:'center',alignItems:'center'}}>
//                                         <Text>CN</Text>
//                                     </Left>
//                                     <Body style={{justifyContent:'center',alignItems:'center'}}>
//                                         <Text>DETAILS</Text>
//                                     </Body>
//                                     <Right style={{justifyContent:'center',alignItems:'center'}}>
//                                         <Badge
//                                             badgeStyle={{ width: 30, height: 25, borderRadius: 10 }}
//                                             value={20}
//                                             status="success"
//                                             size="large"
//                                         // containerStyle={{ position: 'absolute' }}
//                                         />
//                                     </Right>
//                                 </CardItem>
//                                 <CardItem>
//                                     <Body>
//                                         <Text>
//                                         //Your text here
//                                         </Text>
//                                     </Body>
//                                 </CardItem>
//                                 <CardItem footer>
//                                     <Text>GeekyAnts</Text>
//                                 </CardItem>
//                             </Card>
//                         </View>
//                     </View>
//                 </Content>
//             </Container>
//         );
//     }
// }


import React, { Component } from "react";
import { StyleSheet,Platform} from 'react-native'
import { Container, Header, Content, List, Item, Input, Accordion, ListItem, Text, View, Body, Left, Button, Right, Icon, Title, Card, CardItem } from 'native-base';
const dataArray = [
    { title: "CN Details", centerTitle: '', index: 0 },
    { title: "Changes", centerTitle: "", index: 1 },
    { title: "Add/Approvals", centerTitle: "", index: 2 }
];

export default class AccordionCustomHeaderContent extends Component {
    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#A9DAD6"
            }}>
                <Left style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{item.title}</Text>
                </Left>
                <Right style={{ justifyContent: 'center', alignItems: 'center' }}>

                    {expanded
                        ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                        : <Icon style={{ fontSize: 18 }} name="add-circle" />}
                </Right>

            </View>
        );
    }
    _renderContent(item) {
        const styles = Platform.OS === 'web' ?WebStyles: androidStyles ;
        return (
            item.index === 0 ? <Card>
                <CardItem style={{ paddingTop: 40, paddingBottom: 40 }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text>Text</Text>
                        <Text>Text</Text>
                        <Button primary style={styles.buttonClickStyle}><Text> Click </Text></Button>
                        <Button primary style={styles.buttonClickStyle}><Text> Click </Text></Button>
                    </View>
                </CardItem>
            </Card> :
                item.index === 1 ? <Card>
                    <CardItem style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <Left style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>fligt</Text>
                        </Left>
                        <Right style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Item regular>
                                <Input placeholder='600' />
                            </Item>
                        </Right>
                    </CardItem>
                    <CardItem style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <Left style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>c1</Text>
                        </Left>
                        <Right style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Item regular>
                                <Input placeholder='700.00' />
                            </Item>
                        </Right>
                    </CardItem>
                    <CardItem style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <Left style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>c2</Text>
                        </Left>
                        <Right style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Item regular>
                                <Input placeholder='800.0' />
                            </Item>
                        </Right>
                    </CardItem>
                </Card > :
                    <Card>
                        <CardItem style={{ paddingTop: 40, paddingBottom: 40 }}>
                            <View style={{ width:'100%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                            <Text>Delay</Text>
                                <Item regular style={styles.inputWidth}>
                                    <Input placeholder='' />
                                </Item>
                                <Item regular  style={styles.inputWidth}>
                                    <Input placeholder='' />
                                </Item>
                            </View>
                        </CardItem>
                        <CardItem footer style={{ paddingTop: 40, paddingBottom: 40 }}>
                            <Left style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Button success style={styles.buttonClickStyle}><Text>Submit </Text></Button>
                            </Left>
                            <Body />
                            <Right style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <Button danger style={styles.buttonClickStyle}><Text> Cancel </Text></Button>
                            </Right>
                        </CardItem>

                    </Card>
        );
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1 }}>
                        {/* <Icon name="arrow-back" /> */}
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title style={{ alignSelf: "center" }}>POD Submission</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        {/* <Icon name="menu" /> */}
                    </Right>
                </Header>
                <Content padder style={{ backgroundColor: "white" }}>
                    <View style={{ justifyContent: 'center', marginTop: 100 }}>
                        <Accordion
                            dataArray={dataArray}
                            animation={true}
                            expanded={true}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </View>

                </Content>
            </Container>
        );
    }
}
<br />


const WebStyles = StyleSheet.create({
 buttonClickStyle:{ width: 200, justifyContent: 'center', alignItems: 'center' },
 inputWidth:{width:200}
});


const androidStyles = StyleSheet.create({
    buttonClickStyle:{ width: 100, justifyContent: 'center', alignItems: 'center' },
    inputWidth:{width:60}

});
