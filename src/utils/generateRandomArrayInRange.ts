const generateRandomArrayInRange = (
  range: [number, number],
  arrLength: number,
  existingArr: number[]
): number[] => {
  const arr: number[] = []
  while (arr.length !== arrLength) {
    const randomNumber = Math.floor(Math.random() * range[1] + range[0])
    if (!arr.includes(randomNumber) && !existingArr.includes(randomNumber)) {
      arr.push(randomNumber)
    }
  }
  return [...existingArr, ...arr]
}

export default generateRandomArrayInRange
