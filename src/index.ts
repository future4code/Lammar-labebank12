import express,{Request, Response} from "express"
import {accounts, Transactions } from "./data"
import {Transaction, Account } from "./types"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())