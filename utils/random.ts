

export const randomFrom = <T>(arr: T[]): T => {
  const index = Math.floor(Math.random() * (arr.length - 1));
  return arr[index]
}