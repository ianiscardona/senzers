import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import Colors from "../utilities/Colors";
import Logos from "../utilities/Logos";

const TermsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={Logos.SENZERS_LOGO_YELLOW_SMALL}
          alt=""
          style={styles.logo}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}
        >
          <FontAwesome5 name="angle-left" size={25} color="black" />
        </TouchableOpacity>
        <View style={styles.contentScrollViewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <Text style={styles.contentTitle}>Terms of Use</Text>
            <Text style={styles.contentPrivacy}>
              Welcome to Senzers! Thank you for choosing our mobile application.
              Please read and agree to the following ingenious and unique terms
              of use:{"\n\n"}1. User Conduct: By using Senzers, you agree to use
              the application in a manner that is legal, ethical, and respectful
              of others. You will not engage in any activities that may harm,
              disrupt, or compromise the integrity or security of the
              application, its users, or any associated systems.{"\n\n"}2.
              Privacy Protection: We take your privacy seriously. Senzers
              collects and stores data only for the purpose of providing you
              with the best user experience. We do not share your personal
              information with third parties without your consent. You have full
              control over your data and can opt-out of data collection at any
              time.{"\n\n"}3. Intellectual Property: All content and materials
              available on Senzers, including but not limited to the design,
              layout, graphics, text, and software, are protected by
              intellectual property laws. You may not modify, reproduce,
              distribute, or create derivative works from any part of the
              application without our prior written consent.{"\n\n"}4.
              User-Generated Content: Senzers may allow users to post, share, or
              upload content. By doing so, you represent that you have the
              necessary rights and permissions to do so, and you grant Senzers a
              non-exclusive, royalty-free, worldwide, perpetual, and irrevocable
              license to use, modify, reproduce, distribute, and display your
              content for the purpose of operating and improving the
              application.{"\n\n"}5. Prohibited Activities: You agree not to use
              Senzers for any illegal, harmful, or malicious activities,
              including but not limited to spamming, phishing, hacking, or
              distributing viruses or malware. You also agree not to use Senzers
              to harass, defame, discriminate against, or harm others in any
              way.{"\n\n"}6. Liability Limitation: Senzers is provided on an "as
              is" basis, and we do not make any warranties, express or implied,
              regarding its functionality, availability, or accuracy. We are not
              liable for any damages, including but not limited to direct,
              indirect, incidental, or consequential damages, arising from your
              use of Senzers.{"\n\n"}7. Modification and Termination: We reserve
              the right to modify, suspend, or terminate Senzers at any time,
              with or without notice. We may also update these terms of use from
              time to time, and your continued use of Senzers constitutes your
              acceptance of any such changes.{"\n\n"}8. Governing Law: These
              terms of use shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Senzers is operated, without
              regard to conflicts of law principles.{"\n\n"}9. Entire Agreement:
              These terms of use constitute the entire agreement between you and
              Senzers regarding your use of the application, and they supersede
              all prior or contemporaneous communications, understandings, and
              agreements, whether oral or written. By using Senzers, you agree
              to abide by these ingenious and unique terms of use. If you do not
              agree to these terms, please do not use Senzers. Thank you for
              your cooperation, and enjoy using Senzers!
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    position: "absolute",
    top: -10,
  },
  backButton: {
    alignSelf: "flex-start",
    width: 25,
    height: 25,
    marginBottom: 10,
  },
  contentContainer: {
    width: "90%",
    height: "80%",
    marginVertical: "10%",
    marginHorizontal: "5%",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentScrollViewContainer: {
    borderRadius: 30,
    overflow: "hidden",

    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: Colors.PRIMARY_YELLOW,
  },
  scrollViewContainer: {
    borderRadius: 25,
    alignItems: "center",
  },
  contentPrivacy: {
    fontSize: 16,
    // textAlign: "center",
  },
});
