export default function sortData(obj, arg) {
    const result = [];
    const copyObj = { ...obj };
    let keys = Object.keys(copyObj).sort();
    
    for (let key in arg) {
      result.push({key: arg[key], value: obj[arg[key]]});
      keys = keys.filter(el => el !== arg[key]);
    }
    
    keys.forEach(el => result.push({key: el, value: obj[el]}));
      
    return result;
  }