module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
item.enhancement < 20 ? item.enhancement += 1 : null;

  return {
    ...item
  };
}

function fail(item) {
  item.enhancement < 15 ? item.durability -= 5
    : item.enhancement >= 15 ? item.durability -= 15
    : null;
  item.enhancement > 16 ? item.enhancement -= 1 : null;

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  
  return { ...item};
}

function get(item) {
  return { ...item };
}
