import _ from "lodash";

export const nextId = (newdata, dataArray) => {
  const dataArraySorted = _.sortBy(dataArray, ["id"]);
  const lastDataId = _.last(dataArraySorted).id;
  const data = newdata;
  data.id = lastDataId + 1;

  return data;
};
