// @flow

import axios from 'axios';
import type { AxiosPromise } from 'axios';

import { ITypes } from './models';
import { normalizeType } from './normalize';
import { handleErrorsResponse } from './utils';

const getType = (url: string): AxiosPromise<ITypes> =>
  axios
    .get(url)
    .then((response: object) => response.data)
    .then(normalizeType)
    .catch(handleErrorsResponse);

export default getType;
