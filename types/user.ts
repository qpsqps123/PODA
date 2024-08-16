import { ExchangeDiary } from "./exchange-diary"
import { JWT } from "./jwt"
import { MyDiary } from "./my-diarys"

export interface User {
  _id: number
  email: string
  name: string
  type: string
  loginType: string
  phone: string
  address: string
  createdAt: string
  updatedAt: string
  image: string
  token: JWT
  extra: {
    myDiary: MyDiary
    exchangeDiary: ExchangeDiary[]
    age: string
    gender: string
    interest: string[]
    pushNotification: boolean
    fcmToken: string
  }
}