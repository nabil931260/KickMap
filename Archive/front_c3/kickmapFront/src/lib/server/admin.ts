import {getAuth} from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

import {temp_project_id, temp_client_email, temp_private_key} from '$env/static/private'

import pkg from 'firebase-admin';

try
{
    pkg.initializeApp
    ({
        credential: pkg.credential.cert
        ({
            projectId: temp_project_id,
            clientEmail: temp_client_email,
            privateKey: temp_private_key
        })
    });
} catch (err: any)
{
    if (!/alreadyexists/.test(err.message))
    {
        console.error('Firebase Admin Error: ', err.stack);
    }
}


export const adminDb = getFirestore();
export const adminAuth = getAuth();

