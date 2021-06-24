import { environment } from 'src/environments/environment';

export const myurlnodeUrl = environment.url;
export const websockerUrl = environment.websockerUrl;

const nodeEndPoints = {
    logIn: 'auth/log-in',
    signUp: 'auth/sign-up'
};

function getAPIUrls(endpointRoot: string, endPoints: { [key: string]: string }): { [key: string]: string } {
    const urls = {};

    Object.entries(endPoints).forEach(([endPointKey, endPointUrl]) => {
        urls[endPointKey] = `${endpointRoot}/${endPointUrl}`;
    });

    return urls;
}

export const mynodeEndPoint = getAPIUrls(myurlnodeUrl, nodeEndPoints);
