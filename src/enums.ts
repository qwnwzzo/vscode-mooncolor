import { REACT, ANGULAR, VUE, JAVASCRIPT, RESET } from './color';

export const MOON_COLOR_ID = "mooncolor.id";

export const REACT_ID = "mooon.reactColor";
export const VUE_ID = "mooon.vueColor";
export const ANGULAR_ID = "mooon.angularColor";
export const JAVASCRIPT_ID = "mooon.javascriptColor";
export const RESET_ID = "mooon.resetColor";

export const MAPPING_COMMANDS: any = {
  [REACT_ID]: {
    id: REACT_ID,
    color: REACT,
    label: "MOON: React"
  },
  [VUE_ID]: {
    id: VUE_ID,
    color: VUE,
    label: "MOON: VUE"
  },
  [ANGULAR_ID]: {
    id: ANGULAR_ID,
    color: ANGULAR,
    label: "MOON: Angular"
  },
  [JAVASCRIPT_ID]: {
    id: JAVASCRIPT_ID,
    color: JAVASCRIPT,
    label: "MOON: Javascript"
  },
  [RESET_ID]: {
    id: RESET_ID,
    color: RESET,
    label: "MOON: Reset"
  }
};