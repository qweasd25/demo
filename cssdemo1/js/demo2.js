const root = document.documentElement
const range = document.querySelector('.booth-slider')
// 一旦 slider 的范围值发生变化，就执行回调
range.addEventListener('input', handleSlider)
function handleSlider (e) {
  let value = e.target.value
  root.style.setProperty('--slider', value)
}

const inputs = document.querySelectorAll('.color-box > input')
// 一旦输入值发生变化，执行回调
inputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
function handleInputChange (e) {
  let value = e.target.value
  let inputId = e.target.parentNode.id
  let inputBg = `--bg-${inputId}`
  root.style.setProperty(inputBg, value)
}