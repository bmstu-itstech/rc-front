import { client } from './axios';
import { ShortHardathon } from '../../dom/hardathon';

const hardathonID: (id: number) => Promise<ShortHardathon[]> = async (id: number) => {
    const res = await client.get('/api/v0/hardathons/?page=${id}');
    const events = res.data['hardathons'];
    if (res.status >= 300) {
        throw new Error();
    }
    return events;
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