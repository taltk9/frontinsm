export function findByNameOrCode(searchValue) {
  console.log(searchValue);
  const search = searchValue.toLowerCase();
  return (obj) => {
    const {name, code} = obj;
    return name.toLowerCase() === search || code.toLowerCase() === search;
  }
}