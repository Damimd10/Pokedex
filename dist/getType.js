import axios from 'axios';
import { normalizeType } from './normalize';
import { handleErrorsResponse } from './utils';
const getType = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(normalizeType)
    .catch(handleErrorsResponse);
export default getType;
//# sourceMappingURL=getType.js.map
