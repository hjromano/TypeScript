enum TrafficLightType {
  Red,
  Yellow,
  Green,
}

interface YellowColor {
    wait(): void;
}

interface RedColor {
    stop(): void;
}

interface GreenColor {
    drive(): void;
}

type TrafficLight = YellowColor | RedColor | GreenColor;

const trafficLight: TrafficLight = {
    wait() {

    },
}