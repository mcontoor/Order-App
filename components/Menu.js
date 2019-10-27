import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
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

    async componentDidMount() {
        try {
            const data = await getMenu();
            this.setState({
                menu: data
            });
        } catch (e) {
            console.log(e);
        }

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
                    <GridView />
                    {items.length > 0 &&
                        <View style={styles.buttonContainer}>
                            <FlatList
                                numColumns={4}
                                horizontal={false}
                                data={items}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <MenuButton
                                        data={item}
                                        onPress={() => this.props.onAddItem(item)}
                                    />
                                )}
                            />
                        </View>
                    }
                </View>
                <View style={styles.categories}>
                    <GridView />
                    <View style={styles.buttonContainer}>
                        <FlatList
                            data={menu.categories}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <MenuButton
                                    data={item}
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
        flex: 4,
        flexDirection: 'column',
        marginVertical: 6,
        justifyContent: 'flex-start'
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