import { create } from "zustand"
import { MoodType } from "./mock-data"
import { ApiResSuccess } from "@/types/api-response"
import { DiaryTypes } from "@/types/my-diarys"
import { DeliveryStatusTypes } from "@/types/exchange-diary"
import { parse, format } from "date-fns"
import { ko } from "date-fns/locale"

const moodImgData: MoodType = {
  happy: "/assets/svg/happy.svg",
  calm: "/assets/svg/calm.svg",
  sad: "/assets/svg/sad.svg",
  annoy: "/assets/svg/annoy.svg",
  angry: "/assets/svg/angry.svg",
}

export const getImgByMood = (mood: keyof MoodType) => {
  return moodImgData[mood]
}

const moodTxtData: MoodType = {
  happy: "즐거움",
  calm: "평온함",
  sad: "슬픔",
  annoy: "짜증남",
  angry: "화남",
}

export const getTxtByMood = (mood: keyof MoodType) => {
  return moodTxtData[mood]
}

export const getTxtcolorClasses = (mood: keyof MoodType) => {
  return `text-emotion-${mood as any}`
}

export const convertDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-").map(Number)
  return `${year}년 ${month}월 ${day}일`
}

export const convertStatusText = (status: DeliveryStatusTypes) => {
  let result

  switch (status) {
    case "delivery":
      result = "배송중"
      break

    default:
      result = "배송완료"
      break
  }
  return result
}

export const getKoTime = (val: string) => {
  if (val) {
    const date = parse(val, "yyyy.MM.dd HH:mm:ss", new Date())
    const formattedTime = format(date, "aa h:mm", { locale: ko })
    return formattedTime
  }
}

export const getKoDate = (val: string) => {
  if (val) {
    const date = parse(val, "yyyy.MM.dd HH:mm:ss", new Date())
    const formattedDate = format(date, `M월 d일 E요일`, { locale: ko })
    return formattedDate
  }
}

export const sortDiarys = (diarys: DiaryTypes[]) => {
  return diarys.reduce(
    (acc: Record<string, DiaryTypes[]>, item: DiaryTypes) => {
      const date = getKoDate(item.createdAt) as string
      if (!acc[date]) {
        acc[date] = []
      }

      acc[date].push({
        _id: item._id,
        type: item.type,
        user: {
          _id: item.user._id,
          name: item.user.name,
          image: item.user.image,
        },
        content: item.content,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        mainImages: item.mainImages,
        extra: item.extra,
      })
      return acc
    },
    {}
  )
}