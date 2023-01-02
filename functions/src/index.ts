import * as functions from 'firebase-functions';
import {createUserApp} from './create-user';


// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', {structuredData: true});
//   response.send('Hello from Firebase!');
// });

export const createUser = functions.https.onRequest(createUserApp);

export const onAddCourse_UpdatePromoCounter =
    functions.runWith({
                timeoutSeconds: 300,
                memory: '128MB'
             })
             .firestore.document('courses/{courseId}').onCreate(async (snap, context) => {

                await (await import('./promotions-counter/on-add-course')).default(snap, context);

             });

export const onCourseUpdated_UpdatePromoCounter =
    functions.firestore.document('courses/{courseId}').onUpdate(async (change, context) => {

        await (await import('./promotions-counter/on-course-updated')).default(change, context);

    });

export const onCourseDeleted_UpdatePromoCounter =
    functions.firestore.document('courses/{courseId}').onDelete(async (snap, context) => {

        await (await import('./promotions-counter/on-delete-course')).default(snap, context);

    });
