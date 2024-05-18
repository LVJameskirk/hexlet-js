import _ from "lodash";

export default (a, b) => {
    let result = _.last([a, b]);
    return result;
}