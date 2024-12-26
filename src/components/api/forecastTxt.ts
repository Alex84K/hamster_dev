import axios from 'axios';

export async function fechForecast(link: string): Promise<string> {
    const res = await axios.get(`${link}`, {})
    return res.data
  }