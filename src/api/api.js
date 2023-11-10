import request from './apiConfig';
import { ApiMapper } from './apiMapper';

export const getSubject = async() =>{
  try {
    const response = await request.get(ApiMapper.subjects);
    if(response.ok){
      return response.data;
    }
  }
  catch(e){
    throw new Error(e);
  }
}