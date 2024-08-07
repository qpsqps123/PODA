// 스타일 계산 함수
export const getEmotionClasses = (length: number) => {
  let classes: string = ""
  if (length >= 3) {
    classes += "first:py-6 last:py-6"
  }
  if (length === 2) {
    classes += "first:py-6 last:pb-6 last:pt-0"
  }
  if (length === 1) {
    classes += "py-6"
  }
  return classes
}
