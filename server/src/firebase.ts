/**
 * Firebase Admin SDK initialisation.
 * In Cloud Run, uses Application Default Credentials automatically.
 * In dev, set GOOGLE_APPLICATION_CREDENTIALS to a service account key file.
 */
import { initializeApp, getApps, cert, applicationDefault } from 'firebase-admin/app'

if (getApps().length === 0) {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON

  if (serviceAccountJson) {
    // Secret injected as env var (Cloud Run Secret Manager)
    const serviceAccount = JSON.parse(serviceAccountJson) as object
    initializeApp({ credential: cert(serviceAccount as Parameters<typeof cert>[0]) })
  } else {
    // Application Default Credentials (local gcloud auth or Cloud Run service account)
    initializeApp({ credential: applicationDefault() })
  }
}

export { getFirestore } from 'firebase-admin/firestore'
export { getAuth } from 'firebase-admin/auth'
