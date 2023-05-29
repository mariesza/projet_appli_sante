import dataPhysio from '../models/dataPhysio';

const physio = [{
    id:0,
    date:"2022-01-08T11:52:44.000Z",
    poids:90.1,},
    {
    id:1,
    date:"2022-01-08T11:52:44.000Z",
    poids:90.1,   
    
}];

// const physio = [
//     new dataPhysio("2022-01-08T11:52:44.000Z",90.1),
//     new dataPhysio("2022-01-08T12:48:20.000Z", 82.1),
//     new dataPhysio("2022-01-29T21:16:27.000Z", 69.4),
// ];

export default physio;
// const physiologicalData 
// {
//     "people": {
//         "id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//         "gender": 0,
//         "firstname": "Sadie",
//         "lastname": "Pfeffer",
//         "birthyear": 1993,
//         "height": 195,
//         "weightStart": 91,
//         "weightGoal": 62,
//         "bmiStart": "normal",
//         "bmiGoal": "normal",
//         "activityProfile": "active",
//         "physiologicalData": [
//             {
//                 "id": 1,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 90.1,
//                 "date": "2022-01-08T11:52:44.000Z"
//             },
//             {
//                 "id": 4,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 82.1,
//                 "date": "2022-01-08T12:48:20.000Z"
//             },
//             {
//                 "id": 18,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 69.4,
//                 "date": "2022-01-29T21:16:27.000Z"
//             },
//             {
//                 "id": 11,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 74.1,
//                 "date": "2022-02-23T10:31:29.000Z"
//             },
//             {
//                 "id": 38,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 75.8,
//                 "date": "2022-03-07T05:03:38.000Z"
//             },
//             {
//                 "id": 24,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 74.7,
//                 "date": "2022-03-19T17:08:01.000Z"
//             },
//             {
//                 "id": 33,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 76.3,
//                 "date": "2022-03-21T06:53:51.000Z"
//             },
//             {
//                 "id": 32,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 79.3,
//                 "date": "2022-04-20T12:38:48.000Z"
//             },
//             {
//                 "id": 7,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 87.5,
//                 "date": "2022-04-23T16:12:55.000Z"
//             },
//             {
//                 "id": 14,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 81.1,
//                 "date": "2022-05-01T10:26:25.000Z"
//             },
//             {
//                 "id": 36,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 84,
//                 "date": "2022-05-16T20:55:18.000Z"
//             },
//             {
//                 "id": 20,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 89.5,
//                 "date": "2022-05-18T10:16:56.000Z"
//             },
//             {
//                 "id": 19,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 73.4,
//                 "date": "2022-05-24T18:36:42.000Z"
//             },
//             {
//                 "id": 30,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 68,
//                 "date": "2022-06-03T04:39:48.000Z"
//             },
//             {
//                 "id": 2,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 81.5,
//                 "date": "2022-06-04T09:14:39.000Z"
//             },
//             {
//                 "id": 29,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 79.7,
//                 "date": "2022-06-19T00:48:25.000Z"
//             },
//             {
//                 "id": 8,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 71.8,
//                 "date": "2022-06-19T03:52:02.000Z"
//             },
//             {
//                 "id": 10,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 86.4,
//                 "date": "2022-07-13T14:42:45.000Z"
//             },
//             {
//                 "id": 28,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 88,
//                 "date": "2022-07-14T01:29:07.000Z"
//             },
//             {
//                 "id": 27,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 86.3,
//                 "date": "2022-07-24T04:26:33.000Z"
//             },
//             {
//                 "id": 9,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 87.4,
//                 "date": "2022-07-28T02:22:02.000Z"
//             },
//             {
//                 "id": 13,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 76.5,
//                 "date": "2022-07-31T22:48:42.000Z"
//             },
//             {
//                 "id": 3,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 69.2,
//                 "date": "2022-08-04T12:43:16.000Z"
//             },
//             {
//                 "id": 26,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 80.1,
//                 "date": "2022-08-06T15:47:18.000Z"
//             },
//             {
//                 "id": 35,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 83,
//                 "date": "2022-08-20T06:26:43.000Z"
//             },
//             {
//                 "id": 6,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 90.4,
//                 "date": "2022-08-26T00:40:38.000Z"
//             },
//             {
//                 "id": 12,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 75.6,
//                 "date": "2022-09-03T15:02:56.000Z"
//             },
//             {
//                 "id": 5,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 78.1,
//                 "date": "2022-09-08T04:48:01.000Z"
//             },
//             {
//                 "id": 23,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 65.1,
//                 "date": "2022-09-08T15:22:29.000Z"
//             },
//             {
//                 "id": 16,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 77.1,
//                 "date": "2022-09-19T10:57:34.000Z"
//             },
//             {
//                 "id": 17,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 86.2,
//                 "date": "2022-09-23T04:18:26.000Z"
//             },
//             {
//                 "id": 37,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 67.6,
//                 "date": "2022-10-09T22:32:22.000Z"
//             },
//             {
//                 "id": 15,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 68.3,
//                 "date": "2022-10-26T23:48:21.000Z"
//             },
//             {
//                 "id": 31,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 90.6,
//                 "date": "2022-10-27T02:40:11.000Z"
//             },
//             {
//                 "id": 34,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 73.3,
//                 "date": "2022-11-03T18:38:36.000Z"
//             },
//             {
//                 "id": 25,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 81.9,
//                 "date": "2022-11-11T02:27:04.000Z"
//             },
//             {
//                 "id": 21,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 79.2,
//                 "date": "2022-11-13T09:56:53.000Z"
//             },
//             {
//                 "id": 22,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "weight": 65.6,
//                 "date": "2022-12-11T13:16:34.000Z"
//             }
//         ]
//     }
// }