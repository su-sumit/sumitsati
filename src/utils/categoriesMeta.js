const textMap = {
  ml: "machine learning",
  javascript: "javascript",
  react: "react",
  next: "next",
  node: "node",
  aws: "aws",
}

export default function(category) {
  return {
    label: textMap[category],
    logo: `/images/svg/${category}.svg`
  }
}