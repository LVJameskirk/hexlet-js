import _ from 'lodash';

export default (a, b) => {
  const result = _.last([a, b]);
  return result;
}