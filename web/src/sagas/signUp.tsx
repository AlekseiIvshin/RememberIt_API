import { signUp } from '../screens/SignUp/reducer';
import config from '../constants/config';

export function* signUpSaga(action: ReturnType<typeof signUp>) {
    fetch(`${config.apiEndpoint}api/user/`, {
        method: 'POST',
        mode: 'cors', // no-cors, cors, *same-origin
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload)
    }).then((res: any) => {
        console.log(">>OK", res)
    }).catch((err: any) => {
        console.log(">>>ERROR", err)
    })
}
