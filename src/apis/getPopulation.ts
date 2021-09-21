import axios from 'axios';
import { baseUrl } from './baseUrl';
import { headerConfig } from './commonHeader';
import { HttpStatusCode } from 'enums';
import { PopulationCompositionResponse } from '@types';

export const getPopulationComposition = async (
  prefCode: number,
  cityCode: number | '-',
) => {
  if (!Number.isInteger(prefCode)) {
    throw new Error('prefCode must be an integer number.');
  }
  if (cityCode !== '-' && !Number.isInteger(cityCode)) {
    throw new Error('cityCode must be an integer number or `-` character.');
  }
  const url = `${baseUrl}/population/composition/perYear`;
  const response = await axios.get<PopulationCompositionResponse>(url, {
    params: { prefCode, cityCode },
    ...headerConfig,
  });
  if (response?.status === HttpStatusCode.OK) return response?.data?.result;
};
