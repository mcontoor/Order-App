import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { getMenu } from '../services/apiservice';
import MenuButton from '../components/MenuButton';
import GridView from './GridView';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {},
            items: {}
        }
    };

    componentDidMount() {
        getMenu()
            .then((data) => {
                this.setState({
                    menu: data
                })
            })
            .catch(e => console.log(e));
    }

    displayProducts = (name) => {
        const { products } = this.state.menu;
        const data = products.filter(product => product.categoryName === name);
        this.setState({
            items: data
        })
    }

    render() {
        const { menu, items } = this.state;
        return (
            <View style={styles.menuScreen} >
                <View style={styles.subCategories}>
                    <GridView row={8} col={4} />
                    {items.length > 0 &&
                        <View style={styles.buttonContainer}>
                            <FlatList
                                numColumns={Dimensions.get('window').width <= 1080 ? 2 : 4}
                                data={items}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <MenuButton
                                        data={item.name}
                                        onPress={() => this.props.onAddItem(item)}
                                    />
                                )}
                            />
                        </View>
                    }
                </View>
                <View style={styles.categories}>
                    <GridView row={8} col={1} />
                    <View style={styles.buttonContainer}>
                        <FlatList
                            data={menu.categories}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <MenuButton
                                    data={item.name}
                                    onPress={() => this.displayProducts(item.name)} />
                            )}
                        />
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    menuScreen: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
    },
    categories: {
        flex: 1,
        marginVertical: 6,
        overflow: 'hidden',
        marginRight: 5,
    },
    subCategories: {
        flex: Dimensions.get('window').width <= 1080 ? 2 : 4,
        flexDirection: 'column',
        marginVertical: 6,
        justifyContent: 'flex-start',
        overflow: 'hidden',
        marginRight: Dimensions.get('window').width <= 1080 ? 10 : 0,
    },
    style: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonContainer: {
        position: 'absolute',
    }
});

export default Menu;