C = 0;
Cs = 1;
D = 2;
Ds = 3;
E = 4;
F = 5;
Fs = 6;
G = 7;
Gs = 8;
A = 9;
As = 10;
B = 11;

int_tone = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
br_tone = ['Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si'];

/* keymap */

HOHNER_GC_OPEN =  [[D, Fs, A, C, E, Fs, A, C, E, Fs, A], [G, B, D, F, G, B, D, F, G, B]];
HOHNER_GC_CLOSE = [[B, D,  G, B, D, G,  B, D, G, B,  D], [E, G, C, E, G, C, E, G, C, E]];
POPULAR_TONES = [[G,C,60],[C,F,65],[A,D,74]]; // o numero indica o ajuste de tom
HOHNER_GC = [HOHNER_GC_OPEN, HOHNER_GC_CLOSE]

OPEN = 0;
CLOSE = 1;

// chords array constants
c_variations = 2;
c_symbol = 0;

/* chords */

/* [chord_name, 'complement', OPEN/CLOSE, [[row,key],[row,key]...], 'obs'] */

chords = [
    [C, '', [
        [CLOSE, [[1,2],[1,3],[1,4]],''],
        [CLOSE, [[1,5],[1,6],[1,7]],''],
        [OPEN, [[0,3],[0,4],[1,4]],''],
        [OPEN, [[0,7],[0,8],[1,8]],''],
        ]
    ],
    [D, '', [
        [OPEN, [[0,0],[0,1],[0,2]],''],
        [OPEN, [[1,2],[0,5],[0,6]],''],
        [OPEN, [[1,6],[0,9],[0,10]],''],
        ]
    ],
    [D, '<sub>m</sub>', [
        [OPEN, [[1,2],[1,3],[0,6]],''],
        [OPEN, [[1,6],[1,7],[0,10]],''],
        ]
    ],
    [E, '<sup>7</sup>', [
        [CLOSE, [[1,3],[0,3],[0,4]],''],
        [CLOSE, [[1,6],[0,6],[0,7]],''],
        [CLOSE, [[1,9],[0,9],[0,10]],''],
        ]
    ],
    [E, '<sub>m</sub>', [
        [CLOSE, [[1,3],[1,4],[0,6]],''],
        [OPEN,  [[0,4],[1,4],[1,5]],''],
        [CLOSE, [[1,6],[1,7],[0,8]],''],
        [OPEN,  [[0,8],[1,8],[1,9]],''],
        ]
    ],
    [F, '', [
        [OPEN,  [[0,2],[0,3],[1,3]],''],
        [OPEN,  [[0,6],[0,7],[1,7]],''],
        ]
    ],
    [G, '', [
        [OPEN,  [[1,0],[1,1],[1,2]],''],
        [CLOSE, [[0,2],[0,3],[0,4]],''],
        [OPEN,  [[1,4],[1,5],[1,6]],''],
        [CLOSE, [[0,5],[0,6],[0,7]],''],
        [CLOSE, [[0,8],[0,9],[0,10]],''],
        ]
    ],
    [A, '<sub>m</sub>', [
        [OPEN,  [[0,2],[0,3],[0,4]],''],
        [OPEN,  [[0,6],[0,7],[0,8]],''],
        ]
    ],
];
