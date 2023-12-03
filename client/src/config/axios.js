import { internalServerPath, placeholderPath } from "./pathList";
import axios from "axios";

export const Gateway = axios.create({
  baseURL: internalServerPath,
  headers: { 
    Accept: 'application/json', 
    'Content-type': 'application/json'
  }
});

export const Placeholder = axios.create({
  baseURL: placeholderPath,
  headers: { 
    Accept: 'application/json', 
    'Content-type': 'application/json'
  }
});