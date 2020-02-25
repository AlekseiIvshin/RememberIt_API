import config from '../constants/config';

const signUp = (login: string, password: string) => {
    fetch(config.apiEndpoint);
}

export default {
    signUp,
}