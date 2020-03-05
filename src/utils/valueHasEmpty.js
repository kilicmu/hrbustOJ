
//检测对象数组的value属性是否为空
function valueHasEmpty(object) {
  if (!(object instanceof Array)) {
    throw Error("type error: we need an Array");
  }
  for (let obj of object) {
    if (obj.value === '') {
      return true;
    }
  }
  return false;
}

export {
  valueHasEmpty,
}
