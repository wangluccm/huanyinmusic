import Mock from "mockjs";
import { info } from "./data.json";
//console.log(Mock)
//Mock.mock('/test',info)
const baseUrl = '/api'

Mock.mock(`${baseUrl}/phone` ,info )
//Mock.mock('/phone',info)
console.log(info)