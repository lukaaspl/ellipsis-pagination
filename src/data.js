import uuid from "uuid/v4";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaEdge,
  FaChrome,
  FaFirefox,
  FaSafari,
  FaOpera,
  FaMobileAlt,
  FaTabletAlt,
  FaDesktop,
  FaLaptop,
  FaRegQuestionCircle
} from "react-icons/fa";

const unknown = { label: "Unknown", Icon: FaRegQuestionCircle };

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const withLeadingZero = number => (number < 10 ? `0${number}` : number);

const mockDate = () => {
  const day = withLeadingZero(getRandomNumber(1, 30));
  const month = withLeadingZero(getRandomNumber(1, 12));
  const year = getRandomNumber(2000, 2020);
  const hours = withLeadingZero(getRandomNumber(0, 2));
  const minutes = withLeadingZero(getRandomNumber(0, 59));
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const mockIp = () => {
  let ipComponents = [];
  for (let i = 0; i < 4; i++) {
    ipComponents.push(getRandomNumber(0, 255));
  }
  return ipComponents.join(".");
};

const mockDevice = () => {
  const devices = [
    { label: "Mobile", Icon: FaMobileAlt },
    { label: "Tablet", Icon: FaTabletAlt },
    { label: "Desktop", Icon: FaDesktop },
    { label: "Notebook", Icon: FaLaptop },
    unknown
  ];
  return devices[getRandomNumber(0, devices.length - 1)];
};

const mockOs = () => {
  const operationSystems = [
    { label: "Windows", Icon: FaWindows },
    { label: "Apple", Icon: FaApple },
    { label: "Linux", Icon: FaLinux },
    unknown
  ];
  return operationSystems[getRandomNumber(0, operationSystems.length - 1)];
};

const mockBrowser = () => {
  const browsers = [
    { label: "Edge", Icon: FaEdge },
    { label: "Chrome", Icon: FaChrome },
    { label: "Firefox", Icon: FaFirefox },
    { label: "Safari", Icon: FaSafari },
    { label: "Opera", Icon: FaOpera },
    unknown
  ];
  return browsers[getRandomNumber(0, browsers.length - 1)];
};

const mockSession = () => {
  return {
    id: uuid(),
    ip: mockIp(),
    date: mockDate(),
    device: mockDevice(),
    os: mockOs(),
    browser: mockBrowser()
  };
};

const mockSessions = number => {
  const sessions = [];
  for (let i = 0; i < number; i++) {
    sessions.push({
      ...mockSession(),
      number: i + 1
    });
  }
  return sessions;
};

export const allSessions = mockSessions(getRandomNumber(10, 100));
