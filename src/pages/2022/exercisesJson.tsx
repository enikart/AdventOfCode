import {Exercise} from "../../types/exercisesProps";
import Day0101 from "./day01/Day0101";
import Day0102 from "./day01/Day0102";
import Day0201 from "./day02/Day0201";
import Day0202 from "./day02/Day0202";
import Day0301 from "./day03/Day0301";

export var exercisesJson: Exercise[] = [
  {
    "day": 1,
    "part": 1,
    "component": Day0101,
    "key": "2022_01_1",
    "link": "01-01"
  },
  {
    "day": 1,
    "part": 2,
    "component": Day0102,
    "key": "2022_01_2",
    "link": "01-02"
  },
  {
    "day": 2,
    "part": 1,
    "component": Day0201,
    "key": "2022_02_1",
    "link": "02-01"
  },
  {
    "day": 2,
    "part": 2,
    "component": Day0202,
    "key": "2022_02_2",
    "link": "02-02"
  },
  {
    "day": 3,
    "part": 1,
    "component": Day0301,
    "key": "2022_03_1",
    "link": "03-01"
  },
];