export const cleanENV = (str) => {
    return str.replace(/^\"/, '')  .replace(/\";$/, '');;
}