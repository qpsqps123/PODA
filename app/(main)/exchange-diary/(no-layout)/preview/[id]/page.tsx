import { AvatarName } from "@/components/avatar-name"
import { Dotline } from "@/components/dot-line"
import { NavigationHeader } from "@/components/navigation-header"
import { useRouter } from "next/navigation"
import React from "react"

export default function PreviewIdPage() {
  return (
    <div className="w-full ">
      <NavigationHeader />
      <div className="w-full space-y-5">
        <div className="flex w-full justify-center items-center space-x-5">
          <AvatarName name="사용자" />
          <div className="flex flex-col justify-center items-center space-y-5">
            <p className="text-sm text-mainColor font-bold">6:00</p>
            <Dotline count={6} />
          </div>
          <AvatarName name="???" />
        </div>
        <div className="w-full px-[24px] space-y-1">
          <p className="pl-1 text-primary font-semibold">7월 26일 목요일</p>
          <div className="w-full bg-backgroundLighter h-[150px] rounded-lg" />
        </div>
      </div>
    </div>
  )
}