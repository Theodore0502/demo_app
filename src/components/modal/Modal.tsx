import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

interface IProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
}

const PopUp = ({ modalVisible, setModalVisible }: IProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Image
                        source={require('../../../assets/check.png')} 
                        style={styles.icon}
                    />
                    <Text style={styles.title}>Congratulations!!</Text>
                    <Text style={styles.subtitle}>You successfully update{'\n'}your Profile</Text>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                    >
                        <SimpleLineIcons name="close" size={35} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        width: 300,
        height: 300,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 5,
    },
    icon: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 13,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: "400",
    },
    btnContainer: {
        marginTop: 20,
    },
});

export default PopUp;