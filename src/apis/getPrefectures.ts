import axios from 'axios';
import { baseUrl } from './baseUrl';
import { headerConfig } from './commonHeader';
import { PrefecturesResponse, Prefecture } from '@types';
import { HttpStatusCode } from 'enums';

export const getPrefectures = async (): Promise<Prefecture[]> => {
  const url = `${baseUrl}/prefectures`;
  const response = await axios.get<PrefecturesResponse>(url, headerConfig);
  if (
    response.status === HttpStatusCode.OK &&
    response.data?.result?.length > 0
  )
    return response.data.result;
  throw new Error('getPrefectures() ERROR');
};
