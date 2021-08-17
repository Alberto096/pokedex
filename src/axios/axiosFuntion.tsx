import axios from "axios";
import { ApiUrl } from "../constants/constants";


export function asyncFunc() {
    try {
      // fetch data from a url endpoint
      const data = axios.get(ApiUrl);
      return data
    } catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }