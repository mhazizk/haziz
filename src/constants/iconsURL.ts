import react from "../assets/icons/react-color.svg";
import android from "../assets/icons/android-color.svg";
import apple from "../assets/icons/apple-color.svg";
import web from "../assets/icons/googlechrome-color.svg";
import firebase from "../assets/icons/firebase-color.svg";
import googleCloudPlatform from "../assets/icons/googlecloud-color.svg";
import nextjs from "../assets/icons/nextdotjs-color.svg";
import typescript from "../assets/icons/typescript-color.svg";
import javascript from "../assets/icons/javascript-color.svg";
import html from "../assets/icons/html5-color.svg";
import css from "../assets/icons/css3-color.svg";
import expo from "../assets/icons/expo-color.svg";
import sentry from "../assets/icons/sentry-color.svg";

interface IconsURL {
  [key: string]: string;
}

const iconsURL = {
  react: react,
  reactnative: react,
  expo: expo,
  javascript: javascript,
  html: html,
  css: css,
  typescript: typescript,
  nextjs: nextjs,
  firebase: firebase,
  googlecloudplatform: googleCloudPlatform,
  android: android,
  ios: apple,
  web: web,
  sentry: sentry,
} satisfies IconsURL;

export default iconsURL;
