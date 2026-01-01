// app.js - Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // App State
    const state = {
        currentQuestionIndex: 0,
        score: 0,
        userAnswers: [],
        hintsRemaining: 10,
        timer: null,
        timeLeft: 20,
        totalQuestions: 15,
        isPaused: false
    };
    
    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const startBtn = document.getElementById('start-btn');
    const backBtn = document.getElementById('back-btn');
    const restartBtn = document.getElementById('restart-btn');
    const shareBtn = document.getElementById('share-btn');
    
    const timerElement = document.getElementById('timer');
    const currentQuestionElement = document.getElementById('current-question');
    const progressFill = document.getElementById('progress');
    const questionTypeElement = document.getElementById('question-type');
    
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    
    const hintBtn = document.getElementById('hint-btn');
    const hintCountText = document.getElementById('hint-count-text');
    const hintModal = document.getElementById('hint-modal');
    const closeHintBtn = document.getElementById('close-hint');
    const hintText = document.getElementById('hint-text');

    const quitModal = document.getElementById('quit-modal');
    const confirmQuitBtn = document.getElementById('confirm-quit-btn');
    const cancelQuitBtn = document.getElementById('cancel-quit-btn');
    
    const finalScoreElement = document.getElementById('final-score');
    const correctCountElement = document.getElementById('correct-count');
    const accuracyElement = document.getElementById('accuracy');
    const iqCategoryElement = document.getElementById('iq-category');
    const categoryDescriptionElement = document.getElementById('category-description');
    
    let selectedQuestions = [];

    function init() {
        startBtn.addEventListener('click', startTest);
        backBtn.addEventListener('click', showQuitModal);
        restartBtn.addEventListener('click', restartTest);
        shareBtn.addEventListener('click', shareResults);
        hintBtn.addEventListener('click', useHint);
        closeHintBtn.addEventListener('click', closeHint);
        
        confirmQuitBtn.addEventListener('click', confirmQuit);
        cancelQuitBtn.addEventListener('click', closeQuitModal);

        window.addEventListener('click', (e) => {
            if (e.target === hintModal) closeHint();
            if (e.target === quitModal) closeQuitModal();
        });
    }

    function getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function startTest() {
        selectedQuestions = getRandomQuestions(iqQuestions, 15);
        state.currentQuestionIndex = 0;
        state.score = 0;
        state.userAnswers = [];
        state.hintsRemaining = 10;
        state.timeLeft = 20;
        state.isPaused = false;
        
        updateHintUI();
        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        
        loadQuestion();
        startTimer();
    }

    function loadQuestion() {
        const question = selectedQuestions[state.currentQuestionIndex];
        currentQuestionElement.textContent = state.currentQuestionIndex + 1;
        progressFill.style.width = `${((state.currentQuestionIndex + 1) / 15) * 100}%`;
        
        updateQuestionType(question.type);
        questionContainer.innerHTML = `<div class="question-text">${question.question}</div>`;
        questionContainer.classList.remove('slide-out');
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => selectOption(btn, index, question.correct);
            optionsContainer.appendChild(btn);
        });
        resetTimer();
    }

    function updateQuestionType(type) {
        const configs = {
            number: { icon: 'fas fa-sort-numeric-up', text: 'Number Pattern' },
            visual: { icon: 'fas fa-shapes', text: 'Visual Reasoning' },
            alphabet: { icon: 'fas fa-sort-alpha-up', text: 'Alphabet Sequence' },
            default: { icon: 'fas fa-puzzle-piece', text: 'Logical Reasoning' }
        };
        const config = configs[type] || configs.default;
        questionTypeElement.innerHTML = `<i class="${config.icon}"></i><span>${config.text}</span>`;
    }

    function selectOption(button, selectedIndex, correctIndex) {
        clearInterval(state.timer);
        const allButtons = optionsContainer.querySelectorAll('.option-btn');
        allButtons.forEach(btn => btn.disabled = true);
        
        const isCorrect = selectedIndex === correctIndex;
        button.classList.add('selected', isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) allButtons[correctIndex].classList.add('correct');
        
        if (isCorrect) state.score++;
        
        setTimeout(() => {
            questionContainer.classList.add('slide-out');
            setTimeout(() => {
                state.currentQuestionIndex++;
                state.currentQuestionIndex < 15 ? loadQuestion() || startTimer() : finishTest();
            }, 500);
        }, 1000);
    }

    function startTimer() {
        if (state.timer) clearInterval(state.timer);
        state.timer = setInterval(() => {
            if (state.isPaused) return;
            state.timeLeft--;
            timerElement.textContent = state.timeLeft;
            
            if (state.timeLeft <= 10) timerElement.parentElement.classList.add('warning');
            if (state.timeLeft <= 5) timerElement.parentElement.classList.add('critical');
            
            if (state.timeLeft <= 0) {
                clearInterval(state.timer);
                autoSelect();
            }
        }, 1000);
    }

    function resetTimer() {
        state.timeLeft = 20;
        timerElement.textContent = state.timeLeft;
        timerElement.parentElement.classList.remove('warning', 'critical');
    }

    function autoSelect() {
        const firstBtn = optionsContainer.querySelector('.option-btn');
        if (firstBtn) selectOption(firstBtn, -1, selectedQuestions[state.currentQuestionIndex].correct);
    }

    function useHint() {
        if (state.hintsRemaining <= 0 || state.isPaused) return;
        state.hintsRemaining--;
        updateHintUI();
        hintText.textContent = selectedQuestions[state.currentQuestionIndex].hint;
        state.isPaused = true;
        hintModal.classList.add('active');
    }

    function closeHint() {
        hintModal.classList.remove('active');
        state.isPaused = false;
    }

    function updateHintUI() {
        hintCountText.textContent = `Use Hint (${state.hintsRemaining} Left)`;
        if (state.hintsRemaining <= 0) hintBtn.classList.add('disabled');
    }

    function showQuitModal() {
        state.isPaused = true;
        quitModal.classList.add('active');
    }

    function closeQuitModal() {
        quitModal.classList.remove('active');
        state.isPaused = false;
    }

    function confirmQuit() {
        clearInterval(state.timer);
        quitModal.classList.remove('active');
        quizScreen.classList.remove('active');
        startScreen.classList.add('active');
    }

    function finishTest() {
        const percentage = Math.round((state.score / 15) * 100);
        const iqScore = Math.round(70 + (percentage / 100) * 60);
        
        finalScoreElement.textContent = iqScore;
        correctCountElement.textContent = state.score;
        accuracyElement.textContent = `${percentage}%`;
        
        let cat, desc;
        if (iqScore >= 130) { cat = "Very Superior"; desc = "Top 2% of population"; }
        else if (iqScore >= 120) { cat = "Superior"; desc = "Top 14% of population"; }
        else if (iqScore >= 110) { cat = "High Average"; desc = "Above average intelligence"; }
        else if (iqScore >= 90) { cat = "Average"; desc = "Normal intelligence"; }
        else { cat = "Below Average"; desc = "Keep practicing!"; }

        iqCategoryElement.textContent = cat;
        categoryDescriptionElement.textContent = desc;
        
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
    }

    function restartTest() {
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
    }

    function shareResults() {
        const text = `I scored ${finalScoreElement.textContent} on IQ Test Pro!`;
        if (navigator.share) navigator.share({ title: 'IQ Results', text: text, url: window.location.href });
        else alert('Results copied to clipboard!');
    }

    init();
});
