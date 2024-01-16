const scales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const space = ((scales) => {
  let values = {};

  for (let i = 0; i < scales.length; i++) {
    values = { ...values, [i]: (scales[i] as number) * 5 };
  }

  return values;
})(scales);

export default space;
