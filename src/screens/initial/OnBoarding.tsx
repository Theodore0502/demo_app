import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";
import styles from "../../styles/initial/OnBoarding";

const OnBoardingScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "OnBoarding">>();

    return (
        <ImageBackground
            source={require("../../../assets/background.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/product.png")}
                    style={styles.productImage}
                    resizeMode="contain"
                />

                <Text style={styles.text}>
                    After a good dinner one{"\n"}can forgive anybody,{"\n"}even one’s own
                    relatives
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Getting Start</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default OnBoardingScreen;
