// Sample Questions Data
const sampleQuestions = [
    {
        question: "दिइएको अनुक्रम (?) चिन्ह भएको स्थानमा उतम विकल्प कुन हुन आउँछ? A, D, G, J, M, P, ?",
        options: ["Q", "R", "S", "T"],
        answer: 2, // Index of correct answer (0-based)
        hint: "प्रत्येक अक्षर पछिल्लो भन्दा ३ ले बढी छ",
        explanation: "A(1) → D(4) → G(7) → J(10) → M(13) → P(16) → S(19) +३ को नियम"
    },
    {
        question: "0, 4, 18, 48, ?, 180 - मा ? को स्थानमा कति हुन्छ?",
        options: ["80", "90", "100", "110"],
        answer: 2,
        hint: "n² × (n-1) को नियम लागू हुन्छ",
        explanation: "1²×0=0, 2²×1=4, 3²×2=18, 4²×3=48, 5²×4=100, 6²×5=180"
    },
    {
        question: "Kiwi, Eagle, Emu, Penguin, Ostrich - मध्ये अलग कुन हो?",
        options: ["Kiwi", "Eagle", "Emu", "Penguin"],
        answer: 1,
        hint: "उड्न सक्ने र उड्न नसक्ने पक्षीहरू",
        explanation: "Eagle बाहेक सबै उड्न नसक्ने पक्षीहरू हुन्"
    },
    {
        question: "प, ष, य, र, ?",
        options: ["म", "य", "व", "ह"],
        answer: 2,
        hint: "नेपाली वर्णमालाको क्रम",
        explanation: "प → ष → य → र → व (प्रत्येक २ अक्षरको फरक)"
    },
    {
        question: "D, J, P, ?",
        options: ["S", "T", "U", "V"],
        answer: 3,
        hint: "अङ्ग्रेजी वर्णमालाको क्रम",
        explanation: "D(4) → J(10) → P(16) → V(22) +६ को नियम"
    },
    {
        question: "T, R, P, N, L, ?, ?",
        options: ["H, K", "J, H", "K, I", "J, G"],
        answer: 1,
        hint: "उल्टो क्रममा २ गरेर घट्दै जाने",
        explanation: "T(20) → R(18) → P(16) → N(14) → L(12) → J(10) → H(8)"
    },
    {
        question: "'A' is the father of 'B' and 'C'. 'B' is the son of 'A' but 'C' is not the son of 'A'. What is 'C' s relation with 'A'?",
        options: ["Daughter", "Son", "Niece", "Nephew"],
        answer: 0,
        hint: "लिङ्ग सम्बन्ध",
        explanation: "C is not son, so must be daughter"
    },
    {
        question: "Anil was facing south. He turns right and walks 20m. Then he turns right again and walks 10m. Then he turns right again and walks 60m. In which direction is he from the starting point?",
        options: ["North", "North-East", "North-West", "East"],
        answer: 1,
        hint: "दिशा परिवर्तनको चित्र बनाउनुहोस्",
        explanation: "दक्षिण → पश्चिम → उत्तर → पूर्व (North-East)"
    }, 
    {
      question: "Z, X, V, T, R, ?",
      options: ["O", "P", "Q", "S"],
      answer: 1,
      hint: "प्रत्येक अक्षर २ ले घट्दै गएको छ",
      explanation: "Z(26)-2=X(24), X(24)-2=V(22)... R(18)-2=P(16)"
    },
    {
      question: "Doctor : Hospital :: Teacher : ?",
      options: ["Office", "School", "Garden", "Kitchen"],
      answer: 1,
      hint: "कार्यस्थल (Workplace) सम्बन्ध",
      explanation: "डाक्टर अस्पतालमा काम गर्छन् भने शिक्षक विद्यालयमा काम गर्छन्।"
    },
    {
      question: "2, 4, 8, 16, 32, ?",
      options: ["48", "60", "64", "70"],
      answer: 2,
      hint: "अघिल्लो संख्यालाई २ ले गुणन गर्नुहोस्",
      explanation: "2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64"
    },
    {
      question: "समूहमा नमिल्ने पत्ता लगाउनुहोस्: काग, सुगा, भँगेरा, मुसा",
      options: ["काग", "सुगा", "भँगेरा", "मुसा"],
      answer: 3,
      hint: "पक्षी र स्तनधारी बीचको भिन्नता",
      explanation: "मुसा बाहेक अरु सबै पक्षी हुन्।"
    },
    {
      question: "CAT लाई DDY लेखिन्छ भने DOG लाई के लेखिन्छ?",
      options: ["EPH", "EQJ", "FRJ", "ERR"],
      answer: 1,
      hint: "क्रमश: +1, +2, +3 थप्दै जानुहोस्",
      explanation: "D(+1)=E, O(+2)=Q, G(+3)=J -> EQJ"
    },
    {
      question: "7, 14, 21, 28, ?",
      options: ["30", "35", "42", "49"],
      answer: 1,
      hint: "७ को गुणन तालिका",
      explanation: "7×1, 7×2, 7×3, 7×4, 7×5=35"
    },
    {
      question: "नेपाल : काठमाडौँ :: भारत : ?",
      options: ["मुम्बई", "कोलकाता", "नयाँ दिल्ली", "चेन्नई"],
      answer: 2,
      hint: "देश र राजधानीको सम्बन्ध",
      explanation: "नेपालको राजधानी काठमाडौँ भए जस्तै भारतको नयाँ दिल्ली हो।"
    },
    {
      question: "1, 4, 9, 16, 25, ?",
      options: ["30", "32", "36", "40"],
      answer: 2,
      hint: "संख्याहरूको वर्ग (Square numbers)",
      explanation: "1², 2², 3², 4², 5², 6²=36"
    },
    {
      question: "Day : Night :: Up : ?",
      options: ["Down", "Left", "Right", "Sky"],
      answer: 0,
      hint: "विपरितार्थी शब्द",
      explanation: "दिनको उल्टो रात भए जस्तै 'Up' को उल्टो 'Down' हुन्छ।"
    },
    {
      question: "यदि सेतोलाई कालो, कालोलाई रातो र रातोलाई निलो भनिन्छ भने रगतको रङ के हुन्छ?",
      options: ["रातो", "कालो", "निलो", "सेतो"],
      answer: 2,
      hint: "प्रश्नमा दिइएको कोड प्रयोग गर्नुहोस्",
      explanation: "रगत रातो हुन्छ, तर प्रश्नमा रातोलाई 'निलो' भनिएको छ।"
    },
    {
      question: "APPLE को कोड ELPPA भए, ORANGE को के हुन्छ?",
      options: ["EGNARO", "EGNAOR", "ORANG", "GNARO"],
      answer: 0,
      hint: "अक्षरहरूलाई उल्टो क्रममा लेख्ने",
      explanation: "ORANGE लाई उल्टोबाट लेख्दा EGNARO हुन्छ।"
    },
    {
      question: "A, C, E, G, ?",
      options: ["H", "I", "J", "K"],
      answer: 1,
      hint: "एक-एक अक्षर छोडेर (Alternate letters)",
      explanation: "A(+2)=C, C(+2)=E, E(+2)=G, G(+2)=I"
    },
    {
      question: "मंगलबार : बुधबार :: शुक्रबार : ?",
      options: ["बिहीबार", "शनिबार", "आइतबार", "सोमबार"],
      answer: 1,
      hint: "पछिल्लो दिन",
      explanation: "मंगलबार पछि बुधबार आउँछ, शुक्रबार पछि शनिबार आउँछ।"
    },
    {
      question: "Water : Drink :: Food : ?",
      options: ["Cook", "Eat", "Hungry", "Sleep"],
      answer: 1,
      hint: "उपभोग गर्ने तरिका",
      explanation: "पानी पिइन्छ, खाना खाइन्छ।"
    },
    {
      question: "5, 10, 15, 20, ?",
      options: ["22", "24", "25", "30"],
      answer: 2,
      hint: "५ को फरक",
      explanation: "प्रत्येक संख्यामा ५ थपिएको छ।"
    },
    {
      question: "2, 5, 11, 23, ?",
      options: ["46", "47", "48", "49"],
      answer: 1,
      hint: "×2 + 1 को नियम",
      explanation: "2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47"
    },
    {
      question: "यदि RAM = 32 हो भने, SUN = ?",
      options: ["54", "50", "48", "52"],
      answer: 0,
      hint: "अक्षरहरूको स्थान मान (Place Value) जोड्नुहोस्",
      explanation: "S(19)+U(21)+N(14) = 54"
    },
    {
      question: "एक व्यक्ति उत्तरतर्फ ५ किमि हिँड्छ, त्यसपछि दायाँ फर्केर ५ किमि हिँड्छ। अब ऊ सुरुको बिन्दुबाट कुन दिशामा छ?",
      options: ["उत्तर", "पूर्व", "उत्तर-पूर्व", "उत्तर-पश्चिम"],
      answer: 2,
      hint: "दिशाको नक्सा कोर्नुहोस्",
      explanation: "North र East को बीचमा भएकोले North-East हुन्छ।"
    },
    {
      question: "2, 6, 12, 20, 30, ?",
      options: ["36", "40", "42", "44"],
      answer: 2,
      hint: "n² + n को नियम",
      explanation: "1²+1=2, 2²+2=6, 3²+3=12, 4²+4=20, 5²+5=30, 6²+6=42"
    },
    {
      question: "समूहमा नमिल्ने कुन हो? 27, 64, 125, 144",
      options: ["27", "64", "125", "144"],
      answer: 3,
      hint: "Cube vs Square",
      explanation: "27, 64, 125 घन संख्या हुन्, तर 144 वर्ग संख्या हो।"
    },
    {
      question: "यदि हिजो अस्ति मंगलबार थियो भने भोलि पछि कुन दिन हुन्छ?",
      options: ["शनिबार", "आइतबार", "सोमबार", "मंगलबार"],
      answer: 1,
      hint: "आजको दिन पत्ता लगाउनुहोस्",
      explanation: "हिजो अस्ति मंगलबार = आज बिहीबार। भोलि पछि = शनिबारको भोलिपल्ट = आइतबार।"
    },
    {
      question: "Book : Pages :: Continent : ?",
      options: ["Forest", "Countries", "Ocean", "Water"],
      answer: 1,
      hint: "सम्पूर्ण र अंश सम्बन्ध",
      explanation: "किताब पानाहरू मिलेर बने जस्तै महादेश देशहरू मिलेर बन्छ।"
    },
    {
      question: "1, 8, 27, 64, ?",
      options: ["100", "121", "125", "144"],
      answer: 2,
      hint: "घन संख्या (Cubes)",
      explanation: "1³, 2³, 3³, 4³, 5³=125"
    },
    {
      question: "A, E, I, M, Q, ?",
      options: ["R", "S", "T", "U"],
      answer: 3,
      hint: "+4 को नियम",
      explanation: "A(1)+4=E(5), E(5)+4=I(9)... Q(17)+4=U(21)"
    },
    {
      question: "8 : 64 :: 9 : ?",
      options: ["72", "81", "90", "100"],
      answer: 1,
      hint: "वर्ग सम्बन्ध",
      explanation: "8² = 64, त्यसैले 9² = 81"
    },
    {
      question: "Brother : Sister :: Uncle : ?",
      options: ["Aunt", "Mother", "Niece", "Father"],
      answer: 0,
      hint: "लिङ्ग परिवर्तन",
      explanation: "दाजुको दिदी भए जस्तै काकाको काकी (Aunt) हुन्छ।"
    },
    {
      question: "0, 7, 26, 63, ?",
      options: ["124", "125", "126", "127"],
      answer: 0,
      hint: "n³ - 1 को नियम",
      explanation: "1³-1=0, 2³-1=7, 3³-1=26, 4³-1=63, 5³-1=124"
    },
    {
      question: "Mouth : Speak :: Eye : ?",
      options: ["Hear", "Taste", "See", "Smell"],
      answer: 2,
      hint: "इन्द्रियको कार्य",
      explanation: "मुखले बोल्ने काम गर्छ भने आँखाले हेर्ने काम गर्छ।"
    },
    {
      question: "समूहमा नमिल्ने पत्ता लगाउनुहोस्: जनवरी, मे, जुलाई, जुन",
      options: ["जनवरी", "मे", "जुलाई", "जुन"],
      answer: 3,
      hint: "महिनाको दिन संख्या",
      explanation: "जुनमा ३० दिन हुन्छ, अरुमा ३१ दिन हुन्छ।"
    },
    {
      question: "A, Z, B, Y, C, ?",
      options: ["D", "X", "W", "E"],
      answer: 1,
      hint: "विपरित अक्षर",
      explanation: "A(1)-Z(26), B(2)-Y(25), C(3)-X(24)"
    },
    {
      question: "10, 20, 40, 70, ?",
      options: ["100", "110", "120", "130"],
      answer: 1,
      hint: "+10, +20, +30 थप्दै जाने",
      explanation: "10+10=20, 20+20=40, 40+30=70, 70+40=110"
    },
    {
      question: "Pen : Writer :: Axe : ?",
      options: ["Cobbler", "Butcher", "Woodcutter", "Tailor"],
      answer: 2,
      hint: "औजार र प्रयोगकर्ता",
      explanation: "लेखकले कलम प्रयोग गर्छ भने दाउरेले बञ्चरो प्रयोग गर्छ।"
    },
    {
      question: "2, 10, 30, 68, ?",
      options: ["120", "130", "140", "150"],
      answer: 1,
      hint: "n³ + n को नियम",
      explanation: "1³+1=2, 2³+2=10, 3³+3=30, 4³+4=68, 5³+5=130"
    },
    {
      question: "6, 13, 28, 59, ?",
      options: ["118", "120", "122", "124"],
      answer: 2,
      hint: "×2 + 1, +2, +3...",
      explanation: "6×2+1=13, 13×2+2=28, 28×2+3=59, 59×2+4=122"
    },
    {
      question: "यदि HEART लाई 85172 लेखिन्छ भने, EARTH लाई के लेखिन्छ?",
      options: ["51782", "51872", "58172", "27158"],
      answer: 0,
      hint: "अक्षरको कोड मिलाउनुहोस्",
      explanation: "E=5, A=1, R=7, T=2, H=8"
    },
    {
      question: "५ बजेर १५ मिनेट जाँदा घडीको सुईहरू बीच कति डिग्रीको कोण बन्छ?",
      options: ["60°", "67.5°", "72.5°", "90°"],
      answer: 1,
      hint: "|30H - 5.5M| सूत्र",
      explanation: "|30(5) - 5.5(15)| = |150 - 82.5| = 67.5°"
    },
    {
      question: "समूहमा नमिल्ने संख्या पत्ता लगाउनुहोस्: 3, 5, 7, 9, 11, 13",
      options: ["7", "9", "11", "13"],
      answer: 1,
      hint: "Prime numbers",
      explanation: "९ बाहेक सबै प्रधान संख्या हुन्।"
    },
    {
      question: "1, 2, 6, 24, 120, ?",
      options: ["600", "720", "840", "960"],
      answer: 1,
      hint: "क्रमिक गुणन (Factorial)",
      explanation: "1×2, 2×3, 6×4, 24×5, 120×6=720"
    },
    {
      question: "P is the brother of Q. Q is the mother of R. R is the sister of S. How is P related to S?",
      options: ["Father", "Uncle (Maternal)", "Brother", "Grandfather"],
      answer: 1,
      hint: "नाता सम्बन्ध",
      explanation: "S को आमा Q हुन् र आमाको भाइ P मामा हुन्।"
    },
    {
      question: "4, 9, 25, 49, 121, ?",
      options: ["144", "169", "196", "225"],
      answer: 1,
      hint: "प्रधान संख्याहरूको वर्ग",
      explanation: "2², 3², 5², 7², 11², 13²=169"
    },
    {
      question: "यदि अङ्ग्रेजी वर्णमालालाई उल्टो क्रममा लेखियो भने, बायाँबाट १५ औँ अक्षर कुन हुन्छ?",
      options: ["L", "M", "N", "O"],
      answer: 0,
      hint: "27 - n सूत्र",
      explanation: "27 - 15 = 12 (L)"
    },
    {
      question: "3, 12, 27, 48, 75, ?",
      options: ["100", "108", "120", "132"],
      answer: 1,
      hint: "3 × n² को नियम",
      explanation: "3(1²), 3(2²), 3(3²), 3(4²), 3(5²), 3(6²)=108"
    },
    {
      question: "एक लाइनमा राम अगाडिबाट १० औँ र पछाडिबाट १५ औँ स्थानमा छ भने लाइनमा जम्मा कति जना छन्?",
      options: ["24", "25", "26", "27"],
      answer: 0,
      hint: "(L + R) - 1",
      explanation: "(10 + 15) - 1 = 24"
    },
    {
      question: "7, 26, 63, 124, 215, ?",
      options: ["342", "343", "344", "511"],
      answer: 0,
      hint: "n³ - 1 को नियम",
      explanation: "2³-1, 3³-1, 4³-1, 5³-1, 6³-1, 7³-1=342"
    },
    {
      question: "नमिल्ने शब्द छाान्नुहोस्: Mercury, Venus, Moon, Mars",
      options: ["Mercury", "Venus", "Moon", "Mars"],
      answer: 2,
      hint: "ग्रह र उपग्रह",
      explanation: "Moon उपग्रह हो, अरु सबै ग्रह हुन्।"
    },
    {
      question: "A, D, I, P, ?",
      options: ["U", "V", "W", "Y"],
      answer: 3,
      hint: "स्थान मानको वर्ग",
      explanation: "1²(A), 2²(D), 3²(I), 4²(P), 5²(Y)"
    },
    {
      question: "यदि 1st Jan 2023 आइतबार थियो भने, 1st Jan 2024 कुन दिन हुन्छ?",
      options: ["सोमबार", "मंगलबार", "बिहीबार", "आइतबार"],
      answer: 0,
      hint: "साधारण वर्षमा १ दिन थपिन्छ",
      explanation: "२०२३ साधारण वर्ष हो, त्यसैले १ दिन बढ्छ।"
    },
    {
      question: "0, 6, 24, 60, 120, ?",
      options: ["180", "210", "240", "300"],
      answer: 1,
      hint: "n³ - n को नियम",
      explanation: "1³-1, 2³-2, 3³-3, 4³-4, 5³-5, 6³-6=210"
    },
    {
      question: "यदि CUT लाई 32120 लेखिन्छ भने, PEN लाई के लेखिन्छ?",
      options: ["16514", "15514", "16614", "16513"],
      answer: 0,
      hint: "स्थान मान सिधै लेख्ने",
      explanation: "P=16, E=5, N=14"
    },
    {
      question: "2, 3, 5, 7, 11, 13, ?",
      options: ["15", "17", "18", "19"],
      answer: 1,
      hint: "Prime Numbers",
      explanation: "१३ पछिको प्रधान संख्या १७ हो।"
    }

];

// Main Application Class
class IQTestApp {
    constructor() {
        this.questions = [...sampleQuestions];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.timerDuration = 15;
        this.currentTimer = this.timerDuration;
        this.timerInterval = null;
        this.isAnswered = false;
        this.selectedOption = null;

        // DOM Elements
        this.elements = {
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            timerDisplay: document.getElementById('timer-display'),
            timerElement: document.getElementById('timer'),
            progressBar: document.getElementById('progress-bar'),
            progressText: document.getElementById('progress-text'),
            scoreElement: document.getElementById('score'),
            correctCount: document.getElementById('correct-count'),
            wrongCount: document.getElementById('wrong-count'),
            hintBtn: document.getElementById('hint-btn'),
            solutionBtn: document.getElementById('solution-btn'),
            skipBtn: document.getElementById('skip-btn'),
            nextBtn: document.getElementById('next-btn'),
            hintSection: document.getElementById('hint-section'),
            hintText: document.getElementById('hint-text'),
            explanationSection: document.getElementById('explanation-section'),
            explanationText: document.getElementById('explanation-text'),
            feedback: document.getElementById('feedback'),
            questionCard: document.getElementById('question-card')
        };

        this.init();
    }

    init() {
        // Add event listeners
        this.addEventListeners();
        
        // Load first question
        this.loadQuestion(this.currentQuestionIndex);
        
        // Start timer
        this.startTimer();
        
        // Update stats
        this.updateStats();
    }

    loadQuestion(index) {
        if (index < 0 || index >= this.questions.length) {
            this.showCompletion();
            return;
        }

        this.currentQuestionIndex = index;
        this.isAnswered = false;
        this.selectedOption = null;

        const question = this.questions[index];

        // Reset UI
        this.resetUI();

        // Update question
        this.elements.questionText.textContent = question.question;
        
        // Clear and recreate options
        this.elements.optionsContainer.innerHTML = '';
        
        // Create options
        const optionLetters = ['A', 'B', 'C', 'D'];
        question.options.forEach((optionText, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.dataset.index = index;
            
            optionDiv.innerHTML = `
                <div class="option-letter">${optionLetters[index]}</div>
                <div class="option-text">${optionText}</div>
            `;
            
            optionDiv.addEventListener('click', () => this.selectOption(index));
            this.elements.optionsContainer.appendChild(optionDiv);
        });

        // Update hint and explanation
        this.elements.hintText.textContent = question.hint;
        this.elements.explanationText.textContent = question.explanation;

        // Update progress
        this.updateProgress();

        // Reset and start timer
        this.resetTimer();
        this.startTimer();
    }

    resetUI() {
        // Remove all option classes
        const options = this.elements.optionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('correct', 'wrong', 'selected');
        });

        // Hide feedback sections
        this.elements.feedback.classList.add('hidden');
        this.elements.hintSection.classList.add('hidden');
        this.elements.explanationSection.classList.add('hidden');

        // Enable buttons
        this.elements.hintBtn.disabled = false;
        this.elements.solutionBtn.disabled = false;
    }

    selectOption(optionIndex) {
        if (this.isAnswered) return;

        this.isAnswered = true;
        this.selectedOption = optionIndex;
        
        // Get option element
        const options = this.elements.optionsContainer.querySelectorAll('.option');
        const selectedOption = options[optionIndex];
        
        // Mark as selected
        selectedOption.classList.add('selected');
        
        // Check answer
        const isCorrect = optionIndex === this.questions[this.currentQuestionIndex].answer;
        
        // Show feedback
        this.showFeedback(isCorrect);
        
        // Update score
        if (isCorrect) {
            this.score += 10;
            this.correctAnswers++;
        } else {
            this.wrongAnswers++;
        }
        
        // Update stats
        this.updateStats();
        
        // Stop timer
        this.stopTimer();
        
        // Reveal correct answer
        this.revealCorrectAnswer();
    }

    showFeedback(isCorrect) {
        this.elements.feedback.classList.remove('hidden');
        
        if (isCorrect) {
            this.elements.feedback.className = 'bg-green-900/40 border border-green-700 rounded-xl p-4 mb-4';
            this.elements.feedback.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-400 text-2xl mr-3"></i>
                    <div>
                        <h3 class="font-bold text-lg text-green-300">सही उत्तर!</h3>
                        <p class="text-green-200 text-sm">तपाईंले सही उत्तर दिनुभयो। +10 अंक</p>
                    </div>
                </div>
            `;
        } else {
            this.elements.feedback.className = 'bg-red-900/40 border border-red-700 rounded-xl p-4 mb-4';
            this.elements.feedback.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-times-circle text-red-400 text-2xl mr-3"></i>
                    <div>
                        <h3 class="font-bold text-lg text-red-300">गलत उत्तर</h3>
                        <p class="text-red-200 text-sm">तपाईंले गलत उत्तर दिनुभयो।</p>
                    </div>
                </div>
            `;
        }
    }

    revealCorrectAnswer() {
        const correctIndex = this.questions[this.currentQuestionIndex].answer;
        const options = this.elements.optionsContainer.querySelectorAll('.option');
        
        // Mark correct answer
        options[correctIndex].classList.add('correct');
        
        // Mark wrong selection if any
        if (this.selectedOption !== null && this.selectedOption !== correctIndex) {
            options[this.selectedOption].classList.add('wrong');
        }
    }

    startTimer() {
        this.stopTimer(); // Clear existing timer
        this.currentTimer = this.timerDuration;
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            this.currentTimer--;
            this.updateTimerDisplay();
            
            if (this.currentTimer <= 0) {
                this.handleTimeout();
            } else if (this.currentTimer <= 5) {
                this.elements.timerElement.classList.add('timer-warning');
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.elements.timerElement.classList.remove('timer-warning');
    }

    resetTimer() {
        this.stopTimer();
        this.currentTimer = this.timerDuration;
        this.updateTimerDisplay();
        this.elements.timerElement.classList.remove('timer-warning');
    }

    updateTimerDisplay() {
        this.elements.timerDisplay.textContent = this.currentTimer;
    }

    handleTimeout() {
        this.stopTimer();
        this.isAnswered = true;
        
        // Show timeout message
        this.elements.feedback.classList.remove('hidden');
        this.elements.feedback.className = 'bg-yellow-900/40 border border-yellow-700 rounded-xl p-4 mb-4';
        this.elements.feedback.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-clock text-yellow-400 text-2xl mr-3"></i>
                <div>
                    <h3 class="font-bold text-lg text-yellow-300">समय सकियो!</h3>
                    <p class="text-yellow-200 text-sm">अर्को प्रश्नमा जान्छ...</p>
                </div>
            </div>
        `;
        
        // Reveal correct answer
        this.revealCorrectAnswer();
        
        // Auto-advance after 2 seconds
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    toggleHint() {
        this.elements.hintSection.classList.toggle('hidden');
    }

    showSolution() {
        this.elements.explanationSection.classList.remove('hidden');
        this.stopTimer();
    }

    skipQuestion() {
        this.nextQuestion();
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion(this.currentQuestionIndex);
        } else {
            this.showCompletion();
        }
    }

    showCompletion() {
        this.elements.questionCard.innerHTML = `
            <div class="text-center py-12">
                <div class="text-6xl mb-6">🎉</div>
                <h2 class="text-2xl font-bold text-green-400 mb-4">बधाई छ!</h2>
                <p class="text-xl text-gray-300 mb-6">तपाईंले सबै प्रश्नहरू पूरा गर्नुभयो</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="glass-dark p-6 rounded-2xl">
                        <div class="text-4xl font-bold text-green-400 mb-2">${this.correctAnswers}</div>
                        <div class="text-gray-400">सही उत्तर</div>
                    </div>
                    <div class="glass-dark p-6 rounded-2xl">
                        <div class="text-4xl font-bold text-blue-400 mb-2">${this.score}</div>
                        <div class="text-gray-400">कुल स्कोर</div>
                    </div>
                    <div class="glass-dark p-6 rounded-2xl">
                        <div class="text-4xl font-bold text-red-400 mb-2">${this.wrongAnswers}</div>
                        <div class="text-gray-400">गलत उत्तर</div>
                    </div>
                </div>
                
                <div class="mt-8">
                    <button onclick="location.reload()" class="action-btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
                        <i class="fas fa-redo mr-2"></i>फेरि खेल्नुहोस्
                    </button>
                </div>
            </div>
        `;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.elements.progressBar.style.width = `${progress}%`;
        this.elements.progressText.textContent = `प्रश्न ${this.currentQuestionIndex + 1}/${this.questions.length}`;
    }

    updateStats() {
        this.elements.scoreElement.textContent = this.score;
        this.elements.correctCount.textContent = this.correctAnswers;
        this.elements.wrongCount.textContent = this.wrongAnswers;
    }

    addEventListeners() {
        // Button events
        this.elements.hintBtn.addEventListener('click', () => this.toggleHint());
        this.elements.solutionBtn.addEventListener('click', () => this.showSolution());
        this.elements.skipBtn.addEventListener('click', () => this.skipQuestion());
        this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Number keys 1-4 for options
            if (e.key >= '1' && e.key <= '4') {
                const index = parseInt(e.key) - 1;
                const options = this.elements.optionsContainer.querySelectorAll('.option');
                if (options[index]) {
                    this.selectOption(index);
                }
            }
            // Space to skip
            else if (e.key === ' ') {
                e.preventDefault();
                this.skipQuestion();
            }
            // H for hint
            else if (e.key === 'h' || e.key === 'H') {
                this.toggleHint();
            }
            // S for solution
            else if (e.key === 's' || e.key === 'S') {
                this.showSolution();
            }
            // N for next
            else if (e.key === 'n' || e.key === 'N') {
                this.nextQuestion();
            }
            // Enter for next when answered
            else if (e.key === 'Enter' && this.isAnswered) {
                this.nextQuestion();
            }
        });
        
        // Prevent zoom on mobile double tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create and initialize the app
    window.iqApp = new IQTestApp();
    
    // Add touch optimizations
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        option.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
});

// Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}