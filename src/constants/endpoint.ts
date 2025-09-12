import {API_VERSION } from '@env';


const ENDPOINT_URL=`/api/${API_VERSION}`

export const ENDPOINT_URLS={
    SIGNUP:`${ENDPOINT_URL}/auth/user-signup`,
    SIGNIN:`${ENDPOINT_URL}/auth/user-login`,
    VERIFY_EMAIL:`${ENDPOINT_URL}/auth/user-verify-email`,
    RESEND_VERIFY_EMAIL:`${ENDPOINT_URL}/auth/resend-verification-email`,
}