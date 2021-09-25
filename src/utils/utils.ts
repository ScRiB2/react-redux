export const cls = (...classes: (string | false | undefined)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
