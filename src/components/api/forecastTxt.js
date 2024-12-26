import axios from 'axios';
export async function fechForecast(link) {
    const res = await axios.get(`${link}`, {});
    return res.data;
}
