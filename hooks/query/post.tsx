"use client"

import { apiKeys } from "@/lib/api-keys"
import { sortDiarys } from "@/lib/function"
import { fetcher } from "@/lib/protocol"
import { ApiResError, ApiResSuccess } from "@/types/api-response"
import { DiaryTypes } from "@/types/my-diarys"
import { useQuery } from "@tanstack/react-query"

export const usePostsDiarys = (
  type: string,
  userId?: number,
  productId?: number
) => {
  const searchParams = new URLSearchParams()
  // const searchParams = productId
  //   ? new URLSearchParams([
  //       ["custom", JSON.stringify({ product_id: productId })],
  //     ])
  //   : null

  if (productId) {
    searchParams.append("custom", JSON.stringify({ product_id: productId }))
  }

  if (userId) {
    searchParams.append("custom", JSON.stringify({ "user._id": userId }))
  }

  console.log("searchParams: ", searchParams.toString())

  const { data, isPending, error, refetch } = useQuery<
    Record<string, DiaryTypes[]>
  >({
    queryKey: [apiKeys.posts],
    queryFn: async () => {
      // const res = productId
      //   ? await fetcher(
      //       `${apiKeys.posts}?type=${type}&${searchParams?.toString()}`
      //     )
      //   : await fetcher(`${apiKeys.posts}?type=${type}`)
      const res = await fetcher(
        `${apiKeys.posts}?type=${type}&${searchParams.toString()}`
      )

      console.log("res: ", res)
      return sortDiarys(res.item)
    },
    staleTime: 1000 * 3,
  })

  return {
    data,
    isPending,
    error,
    refetch,
  }
}

export const usePostsDiary = (id: string) => {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: [apiKeys.posts, id],
    queryFn: async () => {
      return await fetcher(`/posts/${id}`)
    },
    staleTime: 1000 * 3,
  })

  return {
    data,
    isPending,
    error,
    refetch,
  }
}