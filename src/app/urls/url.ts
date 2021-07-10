import { environment } from 'src/environments/environment';

export const myurlnodeUrl = environment.url;

const nodeEndPoints = {
    logIn: 'auth/log-in',
    signUp: 'auth/sign-up',
    crush: 'crush',
    post: 'post'
};

const webSocketEndPoints = {
    post: 'post'
};

function getAPIUrls(endpointRoot: string, endPoints: { [key: string]: string }): { [key: string]: string } {
    const urls = {};

    Object.entries(endPoints).forEach(([endPointKey, endPointUrl]) => {
        urls[endPointKey] = `${endpointRoot}/${endPointUrl}`;
    });

    return urls;
}

export const mynodeEndPoint = getAPIUrls(myurlnodeUrl, nodeEndPoints);
