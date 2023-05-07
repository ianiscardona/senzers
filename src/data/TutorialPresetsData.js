import tutorialTitle from "../../assets/images/tutorial/tutorial-title.png";
import tutorialTwo from "../../assets/images/tutorial/tutorial-2.png";
import tutorialThree from "../../assets/images/tutorial/tutorial-3.png";
import tutorialFour from "../../assets/images/tutorial/tutorial-4.png";
import tutorialFive from "../../assets/images/tutorial/tutorial-5.png";

export const TutorialPresetsData = [
  {
    id: 1,
    img: tutorialTitle,
    desc: "Our mobile app uses two sensors, the HMC 5983 magnetometer and A02YYUW waterproof ultrasonic sensor. Understanding their functionalities is crucial for the consistent and reliable data collection of potential illegally parked vehicles.",
  },
  {
    id: 2,
    img: tutorialTwo,
    desc: "The HMC 5983 3-Axis Magnetometer is a sensor that will automatically detect a vehicle that will hover above it. Small but reliable on picking up changes in magnetic field around it.",
  },
  {
    id: 3,
    img: tutorialThree,
    desc: "Next, the A02YYUW waterproof ultrasonic sensor is a type of sensor that measure distances and is designed to operate in challenging environments, making it ideal for object detection and liquid level sensing.",
  },
  {
    id: 4,
    img: tutorialFour,
    desc: "Now how are they used?",
  },
  {
    id: 5,
    img: tutorialFive,
    desc: "Once the sensor has detected a vehicle, it will send a notification immediately. After 5 minutes, it will send another notification that the vehicle is now considered illegally parked. You can now fill up the form and report the vehicle!",
  },
];
