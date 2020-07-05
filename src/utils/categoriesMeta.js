const textMap = {
  ml: "machine learning",
  javascript: "javascript",
  react: "react",
  next: "next",
  node: "node",
  aws: "AWS",
}

export default function(category) {
  const toLow = category.toLowerCase()
  return {
    label: textMap[toLow],
    logo: `/images/svg/${toLow}.svg`
  }
}