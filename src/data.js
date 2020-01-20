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
    FaMobileAlt,
    FaTabletAlt,
    FaDesktop,
    FaLaptop,
    FaRegQuestionCircle
  ];
  return devices[getRandomNumber(0, devices.length - 1)];
};

const mockOs = () => {
  const operationSystems = [FaWindows, FaApple, FaLinux, FaRegQuestionCircle];
  return operationSystems[getRandomNumber(0, operationSystems.length - 1)];
};

const mockBrowser = () => {
  const browsers = [
    FaEdge,
    FaChrome,
    FaFirefox,
    FaSafari,
    FaOpera,
    FaRegQuestionCircle
  ];
  return browsers[getRandomNumber(0, browsers.length - 1)];
};

const mockSession = () => {
  return {
    id: uuid(),
    ip: mockIp(),
    date: mockDate(),
    Device: mockDevice(),
    Os: mockOs(),
    Browser: mockBrowser()
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
