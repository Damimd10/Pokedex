import axios from 'axios';
import { normalizeType } from './normalize';
import { handleErrorsResponse } from './utils';
var getType = function(url) {
  return axios
    .get(url)
    .then(function(response) {
      return response.data;
    })
    .then(normalizeType)
    .catch(handleErrorsResponse);
};
export default getType;
//# sourceMappingURL=getType.js.map
