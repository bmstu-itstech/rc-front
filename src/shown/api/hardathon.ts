import { client } from './axios';
import { Hardathons, ShortHardathon } from '../../dom/hardathon';

const hardathonID: (id: number) => Promise<Hardathons[]> = async (id: number) => {
    const res = await client.get(`/api/v0/hardathons/${id}`);
    const data = res.data;
    if (res.status >= 300) {
        throw new Error();
    }
    return data;
};

const hardathonList: () => Promise<ShortHardathon[]> = async () => {
    const res = await client.get('/api/v0/hardathons/');
    const events = res.data['hardathons'];
    if (res.status >= 300) {
        throw new Error();
    }
    return events;
};

export { hardathonID, hardathonList };
