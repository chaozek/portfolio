export const findAndRemoveDuplicite = <T extends { id: any }>(data: T[]): T[] => {
  return data.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i).sort()
}
