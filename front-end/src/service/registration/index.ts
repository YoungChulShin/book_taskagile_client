import {RegisterForm} from '@/model/registration';
import axios from 'axios';

export default class RegistrationService {
    static async register (detail: RegisterForm) : Promise<string> {
        let response = await axios.post('registrations', detail);
        return response.data;
    }
}