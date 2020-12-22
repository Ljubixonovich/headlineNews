import { newsApiKey as apiKey } from '../../apiKey';

const baseUrl = 'https://newsapi.org/v2/top-headlines';

export default class Api {
  static async getTopNews({ search = '', selectedCountry = 'us', category = '', pageSize = 0 }) {
    let url = `${baseUrl}?country=${selectedCountry}`;
    url = search === '' ? url : `${url}&q=${search}`;
    url = category === '' ? url : `${url}&category=${category}`;
    url = pageSize === 0 ? url : `${url}&pageSize=${pageSize}`;
    url += `&apiKey=${apiKey}`;
    console.log('url: ', url);

    const res = await fetch(url);
    const response = await res.json();
    return response.articles;
  }
}