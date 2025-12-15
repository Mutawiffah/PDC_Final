module.exports = function classifyImage() {
  const labels = ["cat", "dog", "car", "digit-5", "xray-normal"]
  return {
    label: labels[Math.floor(Math.random() * labels.length)],
    confidence: Number((Math.random() * 0.4 + 0.6).toFixed(2))
  }
}
