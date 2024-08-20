import { client } from './axios';
import {Hardathons} from "../../domain/entities/hardathons";

const hardathonsList: () => Promise<Hardathons[]> = async () => {
    const res = await client.get(`/hardathons/`);
    if (res.status >= 300) {
        throw new Error();
    }
    const data = res.data;
    return data['hardathons'];
};

export { hardathonsList };