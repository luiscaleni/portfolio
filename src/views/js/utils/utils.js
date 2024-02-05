export function getImage(name) {
  console.log(name)
  return (
    '/src/views/assets/images/icons/svg/'+
    name +
    '.svg'
  )
}
export function getClass(classNameApp) {
  return (
    classNameApp +
    " app"
  )
}