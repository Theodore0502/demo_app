import { Image, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import styles from "../../styles/initial/Splash";
import { RootStackParamList } from "../../types/route";

const SplashScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "Splash">>();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("OnBoarding");
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/logo.png")}
                style={styles.logo}
            />
        </View>
    );
}

export default SplashScreen;