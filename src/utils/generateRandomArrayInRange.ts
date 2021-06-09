const generateRandomArrayInRange = (
  range: [number, number],
  arrLength: number
): number[] => {
  const arr: number[] = []
  while (arr.length !== arrLength) {
    const randomNumber = Math.floor(Math.random() * range[1] + range[0])
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber)
    }
  }
  return arr
}

export default generateRandomArrayInRange
