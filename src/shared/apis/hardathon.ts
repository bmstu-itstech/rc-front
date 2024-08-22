import { client } from './axios';
import {Hardathon} from "../../domain/entities/hardathon";

const hardathonElement = async (id: string): Promise<Hardathon> => {
    const res = await client.get(`/hardathons/${id}/`);
    if (res.status >= 300) {
        throw new Error();
    }
    return res.data;
};

export { hardathonElement };