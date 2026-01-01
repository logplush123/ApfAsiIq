// questions.js - Contains 50+ IQ test questions

const iqQuestions = [
    // Number Pattern Questions (15)
    {
        id: 1,
        type: "number",
        question: "Complete the sequence: 2, 6, 12, 20, ?",
        options: ["24", "28", "30", "32"],
        correct: 2, // index 2 = "30"
        hint: "The difference between numbers is increasing by 2 each time: +4, +6, +8, so next is +10."
    },
    {
        id: 2,
        type: "number",
        question: "What number comes next: 3, 8, 15, 24, 35, ?",
        options: ["46", "48", "50", "52"],
        correct: 1, // "48"
        hint: "The pattern is n² - 1: 2²-1=3, 3²-1=8, 4²-1=15, 5²-1=24, 6²-1=35, so 7²-1=48."
    },
    {
        id: 3,
        type: "number",
        question: "Find the missing number: 5, 10, 17, 26, ?",
        options: ["35", "36", "37", "38"],
        correct: 2, // "37"
        hint: "The difference increases by 2 each time: +5, +7, +9, so next difference is +11."
    },
    {
        id: 4,
        type: "number",
        question: "Complete the series: 1, 1, 2, 3, 5, 8, 13, ?",
        options: ["18", "20", "21", "24"],
        correct: 2, // "21"
        hint: "This is the Fibonacci sequence where each number is the sum of the two preceding ones."
    },
    {
        id: 5,
        type: "number",
        question: "What comes next: 4, 9, 16, 25, 36, ?",
        options: ["49", "56", "64", "72"],
        correct: 0, // "49"
        hint: "These are perfect squares: 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, so next is 7²=49."
    },
    {
        id: 6,
        type: "number",
        question: "Find the pattern: 2, 3, 5, 7, 11, 13, ?",
        options: ["15", "17", "19", "21"],
        correct: 1, // "17"
        hint: "These are prime numbers in ascending order."
    },
    {
        id: 7,
        type: "number",
        question: "Complete: 1, 4, 9, 16, 25, 36, ?",
        options: ["49", "64", "81", "100"],
        correct: 0, // "49"
        hint: "These are square numbers: 1², 2², 3², 4², 5², 6², so next is 7²=49."
    },
    {
        id: 8,
        type: "number",
        question: "What's next: 1, 8, 27, 64, 125, ?",
        options: ["216", "225", "256", "343"],
        correct: 0, // "216"
        hint: "These are cube numbers: 1³, 2³, 3³, 4³, 5³, so next is 6³=216."
    },
    {
        id: 9,
        type: "number",
        question: "Find the missing: 10, 30, 32, 96, 98, ?",
        options: ["100", "196", "294", "392"],
        correct: 2, // "294"
        hint: "Pattern: ×3, +2, ×3, +2, so 98×3=294."
    },
    {
        id: 10,
        type: "number",
        question: "Complete: 2, 5, 10, 17, 26, ?",
        options: ["35", "36", "37", "38"],
        correct: 2, // "37"
        hint: "Pattern: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, so 6²+1=37."
    },
    {
        id: 11,
        type: "number",
        question: "What comes next: 3, 6, 12, 24, 48, ?",
        options: ["64", "72", "96", "120"],
        correct: 2, // "96"
        hint: "Each number is multiplied by 2 to get the next."
    },
    {
        id: 12,
        type: "number",
        question: "Find the pattern: 1, 3, 7, 15, 31, ?",
        options: ["47", "55", "63", "72"],
        correct: 2, // "63"
        hint: "Pattern: ×2+1: 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31, so 31×2+1=63."
    },
    {
        id: 13,
        type: "number",
        question: "Complete: 100, 81, 64, 49, 36, ?",
        options: ["25", "24", "23", "22"],
        correct: 0, // "25"
        hint: "These are decreasing square numbers: 10², 9², 8², 7², 6², so next is 5²=25."
    },
    {
        id: 14,
        type: "number",
        question: "What's next: 5, 26, 17, 124, 37, ?",
        options: ["216", "226", "342", "512"],
        correct: 2, // "342"
        hint: "Pattern: 2²+1=5, 3³-1=26, 4²+1=17, 5³-1=124, 6²+1=37, so 7³-1=342."
    },
    {
        id: 15,
        type: "number",
        question: "Find the missing: 2, 6, 18, 54, 162, ?",
        options: ["324", "432", "486", "648"],
        correct: 2, // "486"
        hint: "Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162, 162×3=486."
    },

    // Visual/Counting Questions (15)
    {
        id: 16,
        type: "visual",
        question: "How many triangles are in this figure?",
        options: ["7", "9", "10", "12"],
        correct: 1, // "9"
        hint: "Count all small triangles (6), medium triangles (2), and the large triangle (1)."
    },
    {
        id: 17,
        type: "visual",
        question: "How many squares can you count in a 4x4 grid?",
        options: ["16", "25", "30", "36"],
        correct: 2, // "30"
        hint: "Count all possible squares: 16 small (1x1), 9 medium (2x2), 4 large (3x3), and 1 whole (4x4)."
    },
    {
        id: 18,
        type: "visual",
        question: "If a cube is painted red on all sides and cut into 27 smaller cubes, how many cubes have paint on exactly 2 sides?",
        options: ["8", "12", "16", "20"],
        correct: 1, // "12"
        hint: "Only the cubes on the edges (but not corners) will have exactly 2 painted sides."
    },
    {
        id: 19,
        type: "visual",
        question: "How many rectangles are in a 3x3 grid?",
        options: ["24", "30", "36", "42"],
        correct: 2, // "36"
        hint: "In an m×n grid, number of rectangles = m(m+1)n(n+1)/4. For 3×3: 3×4×3×4/4 = 36."
    },
    {
        id: 20,
        type: "visual",
        question: "Count the triangles in a pentagram (five-pointed star).",
        options: ["7", "10", "12", "15"],
        correct: 1, // "10"
        hint: "Count all small triangles (5 pointing outwards, 5 pointing inwards)."
    },
    {
        id: 21,
        type: "visual",
        question: "How many cubes are in a 4x4x4 cube?",
        options: ["64", "96", "100", "125"],
        correct: 0, // "64"
        hint: "A 4x4x4 cube contains 4×4×4 = 64 small cubes."
    },
    {
        id: 22,
        type: "visual",
        question: "How many diagonals does a hexagon have?",
        options: ["6", "9", "12", "15"],
        correct: 1, // "9"
        hint: "Formula: n(n-3)/2 for an n-sided polygon. For hexagon (6 sides): 6×3/2=9."
    },
    {
        id: 23,
        type: "visual",
        question: "How many triangles are formed by drawing all diagonals from one vertex of a heptagon (7 sides)?",
        options: ["4", "5", "6", "7"],
        correct: 1, // "5"
        hint: "From one vertex, you can draw diagonals to all non-adjacent vertices, forming n-2 triangles."
    },
    {
        id: 24,
        type: "visual",
        question: "A 3x3x3 cube is painted on all faces and cut into unit cubes. How many cubes have no paint?",
        options: ["0", "1", "4", "8"],
        correct: 1, // "1"
        hint: "Only the center cube (not on any face) remains unpainted."
    },
    {
        id: 25,
        type: "visual",
        question: "How many matchsticks are needed to make 5 squares in a row (sharing sides)?",
        options: ["16", "17", "18", "20"],
        correct: 0, // "16"
        hint: "First square needs 4, each additional square needs 3 more: 4 + 3×4 = 16."
    },
    {
        id: 26,
        type: "visual",
        question: "How many right angles are in a cube?",
        options: ["12", "16", "24", "32"],
        correct: 2, // "24"
        hint: "Each face has 4 right angles, and there are 6 faces: 6×4=24."
    },
    {
        id: 27,
        type: "visual",
        question: "Count the triangles in a house shape (square with a triangle on top).",
        options: ["5", "6", "7", "8"],
        correct: 3, // "8"
        hint: "Count small triangles in the roof (2), the whole roof (1), and triangles formed by the diagonal in the square (4), plus the whole shape (1)."
    },
    {
        id: 28,
        type: "visual",
        question: "How many squares are in a chessboard?",
        options: ["64", "128", "204", "256"],
        correct: 2, // "204"
        hint: "Total squares = 1² + 2² + 3² + ... + 8² = 204."
    },
    {
        id: 29,
        type: "visual",
        question: "How many triangles are formed by connecting all vertices of an octagon?",
        options: ["40", "56", "64", "72"],
        correct: 1, // "56"
        hint: "Number of triangles = C(n,3) for an n-sided polygon. For octagon (8): C(8,3)=56."
    },
    {
        id: 30,
        type: "visual",
        question: "A pyramid with a square base: how many edges does it have?",
        options: ["8", "10", "12", "16"],
        correct: 0, // "8"
        hint: "Square base has 4 edges, and 4 triangular faces add 4 more edges from apex to base corners."
    },

    // Alphabet/Sequence Questions (20)
    {
        id: 31,
        type: "alphabet",
        question: "What comes next: A, C, F, J, ?",
        options: ["N", "O", "P", "Q"],
        correct: 1, // "O"
        hint: "Pattern: +2, +3, +4, +5 letters from previous: A(+2)=C, C(+3)=F, F(+4)=J, J(+5)=O."
    },
    {
        id: 32,
        type: "alphabet",
        question: "Complete: Z, X, V, T, R, ?",
        options: ["P", "Q", "O", "N"],
        correct: 0, // "P"
        hint: "Every second letter backwards: Z, X, V, T, R, P."
    },
    {
        id: 33,
        type: "alphabet",
        question: "Find the pattern: B, D, G, K, P, ?",
        options: ["U", "V", "W", "X"],
        correct: 1, // "V"
        hint: "Pattern: +2, +3, +4, +5, +6 letters: B(+2)=D, D(+3)=G, G(+4)=K, K(+5)=P, P(+6)=V."
    },
    {
        id: 34,
        type: "alphabet",
        question: "What's next: A, Z, B, Y, C, ?",
        options: ["X", "W", "D", "V"],
        correct: 0, // "X"
        hint: "Alternating pattern: First letter (A), last letter (Z), second letter (B), second last (Y), third letter (C), third last (X)."
    },
    {
        id: 35,
        type: "alphabet",
        question: "Complete: D, H, L, P, ?",
        options: ["S", "T", "U", "V"],
        correct: 1, // "T"
        hint: "Every 4th letter: D(4), H(8), L(12), P(16), T(20)."
    },
    {
        id: 36,
        type: "alphabet",
        question: "Find the missing: A, B, D, G, K, ?",
        options: ["O", "P", "Q", "R"],
        correct: 1, // "P"
        hint: "Pattern: +1, +2, +3, +4, +5 positions: A(+1)=B, B(+2)=D, D(+3)=G, G(+4)=K, K(+5)=P."
    },
    {
        id: 37,
        type: "alphabet",
        question: "What comes next: C, F, I, L, O, ?",
        options: ["R", "S", "T", "U"],
        correct: 0, // "R"
        hint: "Every third letter: C(3), F(6), I(9), L(12), O(15), R(18)."
    },
    {
        id: 38,
        type: "alphabet",
        question: "Complete: AZ, BY, CX, DW, ?",
        options: ["EV", "FU", "GV", "HU"],
        correct: 0, // "EV"
        hint: "First letter increases, second decreases: A-Z, B-Y, C-X, D-W, E-V."
    },
    {
        id: 39,
        type: "alphabet",
        question: "Find the pattern: J, F, M, A, M, ?",
        options: ["J", "A", "S", "O"],
        correct: 0, // "J"
        hint: "These are the first letters of months: January, February, March, April, May, June."
    },
    {
        id: 40,
        type: "alphabet",
        question: "What's next: Q, P, O, N, M, ?",
        options: ["L", "K", "J", "I"],
        correct: 0, // "L"
        hint: "Alphabet in reverse order starting from Q."
    },
    {
        id: 41,
        type: "alphabet",
        question: "Complete: AB, DE, GH, JK, ?",
        options: ["MN", "NO", "OP", "PQ"],
        correct: 0, // "MN"
        hint: "Pairs of consecutive letters, skipping one pair each time: AB, (skip CD), DE, (skip FG), GH, (skip IJ), JK, (skip LM), MN."
    },
    {
        id: 42,
        type: "alphabet",
        question: "Find the missing: ACE, BDF, CEG, DFH, ?",
        options: ["EGI", "FHJ", "GIK", "HJL"],
        correct: 0, // "EGI"
        hint: "Each group is every other letter starting from A, B, C, D, E respectively."
    },
    {
        id: 43,
        type: "alphabet",
        question: "What comes next: M, T, W, T, F, ?",
        options: ["S", "M", "T", "F"],
        correct: 0, // "S"
        hint: "These are the first letters of days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday."
    },
    {
        id: 44,
        type: "alphabet",
        question: "Complete: A, I, Q, Y, ?",
        options: ["G", "H", "I", "J"],
        correct: 0, // "G"
        hint: "Every 8th letter: A(1), I(9), Q(17), Y(25), G(33, but alphabet wraps around)."
    },
    {
        id: 45,
        type: "alphabet",
        question: "Find the pattern: S, M, T, W, T, F, ?",
        options: ["S", "A", "U", "N"],
        correct: 0, // "S"
        hint: "First letters of days of week starting from Sunday: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday."
    },
    {
        id: 46,
        type: "alphabet",
        question: "What's next: B, C, E, H, L, ?",
        options: ["Q", "R", "S", "T"],
        correct: 0, // "Q"
        hint: "Pattern: +1, +2, +3, +4, +5 positions: B(+1)=C, C(+2)=E, E(+3)=H, H(+4)=L, L(+5)=Q."
    },
    {
        id: 47,
        type: "alphabet",
        question: "Complete: Z, W, R, K, ?",
        options: ["B", "C", "D", "F"],
        correct: 0, // "B"
        hint: "Pattern: -3, -5, -7, -9 positions in alphabet: Z(26-3)=W(23), W(23-5)=R(18), R(18-7)=K(11), K(11-9)=B(2)."
    },
    {
        id: 48,
        type: "alphabet",
        question: "Find the missing: A, D, I, P, ?",
        options: ["Y", "Z", "W", "X"],
        correct: 0, // "Y"
        hint: "Positions in alphabet are square numbers: 1²=1=A, 2²=4=D, 3²=9=I, 4²=16=P, 5²=25=Y."
    },
    {
        id: 49,
        type: "alphabet",
        question: "What comes next: AB, BC, CD, DE, ?",
        options: ["EF", "FG", "GH", "HI"],
        correct: 0, // "EF"
        hint: "Consecutive letter pairs moving forward in alphabet."
    },
    {
        id: 50,
        type: "alphabet",
        question: "Complete: R, O, L, I, F, ?",
        options: ["C", "D", "E", "B"],
        correct: 0, // "C"
        hint: "Every third letter backwards: R(18), O(15), L(12), I(9), F(6), C(3)."
    }
];

// Export the questions array
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { iqQuestions };
}