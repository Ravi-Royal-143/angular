export const addLineInMap = (map, coordinates) => {
    map.on('idle', () => {
        map.addSource('trace', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [
                            77.56205,
                            11.005415
                        ],
                        [
                            77.562385,
                            11.004056
                        ],
                        [
                            77.561497,
                            11.003785
                        ],
                        [
                            77.562597,
                            11.001853
                        ],
                        [
                            77.716702,
                            10.94559
                        ],
                        [
                            78.060849,
                            10.963093
                        ],
                        [
                            78.055198,
                            10.934216
                        ],
                        [
                            78.096976,
                            10.907183
                        ],
                        [
                            78.175435,
                            10.936069
                        ],
                        [
                            78.218371,
                            10.931767
                        ],
                        [
                            78.245213,
                            10.957616
                        ],
                        [
                            78.41009,
                            10.947576
                        ],
                        [
                            78.409088,
                            10.945477
                        ],
                        [
                            78.413602,
                            10.943338
                        ],
                        [
                            78.413675,
                            10.94343
                        ],
                        [
                            78.423625,
                            10.960395
                        ],
                        [
                            78.422093,
                            10.960116
                        ],
                        [
                            78.469235,
                            10.928756
                        ],
                        [
                            78.70773,
                            10.874393
                        ],
                        [
                            78.710079,
                            10.877015
                        ],
                        [
                            78.80356,
                            11.023207
                        ],
                        [
                            78.920023,
                            11.316502
                        ],
                        [
                            79.033022,
                            11.457285
                        ],
                        [
                            79.144565,
                            11.553823
                        ],
                        [
                            79.193606,
                            11.629162
                        ],
                        [
                            79.269342,
                            11.674466
                        ],
                        [
                            79.311828,
                            11.685779
                        ],
                        [
                            79.374982,
                            11.750168
                        ],
                        [
                            79.467624,
                            11.905253
                        ],
                        [
                            79.473598,
                            11.949962
                        ],
                        [
                            79.533449,
                            12.014501
                        ],
                        [
                            79.550947,
                            12.074304
                        ],
                        [
                            79.639919,
                            12.212832
                        ],
                        [
                            79.658722,
                            12.21578
                        ],
                        [
                            79.685908,
                            12.268609
                        ],
                        [
                            79.774979,
                            12.32682
                        ],
                        [
                            79.789329,
                            12.379735
                        ],
                        [
                            79.903866,
                            12.538459
                        ],
                        [
                            79.940365,
                            12.656419
                        ],
                        [
                            79.960219,
                            12.659355
                        ],
                        [
                            79.983285,
                            12.733004
                        ],
                        [
                            80.101548,
                            12.913688
                        ],
                        [
                            80.203746,
                            13.007992
                        ],
                        [
                            80.224541,
                            13.014962
                        ],
                        [
                            80.276408,
                            13.073669
                        ],
                        [
                            80.275132,
                            13.081551
                        ],
                        [
                            80.271118,
                            13.080923
                        ],
                        [
                            80.269394,
                            13.090673
                        ],
                        [
                            80.269942,
                            13.090002
                        ]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
        });
    });
}