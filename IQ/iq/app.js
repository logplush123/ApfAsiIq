// app.js - Main application logic

document.addEventListener('DOMContentLoaded', function() {
    // App State
    const state = {
        currentQuestionIndex: 0,
        score: 0,
        userAnswers: [],
        hintUsed: false,
        timer: null,
        timeLeft: 20,
        totalQuestions: 15 // We'll use only 15 out of 50 questions
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
    const hintModal = document.getElementById('hint-modal');
    const closeHintBtn = document.getElementById('close-hint');
    const hintText = document.getElementById('hint-text');
    
    const finalScoreElement = document.getElementById('final-score');
    const correctCountElement = document.getElementById('correct-count');
    const accuracyElement = document.getElementById('accuracy');
    const iqCategoryElement = document.getElementById('iq-category');
    const categoryDescriptionElement = document.getElementById('category-description');
    
    // Select 15 random questions from the pool of 50
    const selectedQuestions = getRandomQuestions(iqQuestions, 15);
    
    // Initialize the app
    function init() {
        // Event Listeners
        startBtn.addEventListener('click', startTest);
        backBtn.addEventListener('click', goToStart);
        restartBtn.addEventListener('click', restartTest);
        shareBtn.addEventListener('click', shareResults);
        hintBtn.addEventListener('click', showHint);
        closeHintBtn.addEventListener('click', closeHint);
        
        // Close modal when clicking outside
        hintModal.addEventListener('click', function(e) {
            if (e.target === hintModal) {
                closeHint();
            }
        });
    }
    
    // Get random questions from the pool
    function getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    // Start the test
    function startTest() {
        // Reset state
        state.currentQuestionIndex = 0;
        state.score = 0;
        state.userAnswers = [];
        state.hintUsed = false;
        state.timeLeft = 20;
        
        // Enable hint button
        hintBtn.disabled = false;
        hintBtn.innerHTML = '<i class="fas fa-lightbulb"></i><span>Use Hint (One-time)</span>';
        
        // Switch screens
        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        
        // Load first question
        loadQuestion();
        startTimer();
    }
    
    // Load current question
    function loadQuestion() {
        const question = selectedQuestions[state.currentQuestionIndex];
        
        // Update progress
        currentQuestionElement.textContent = state.currentQuestionIndex + 1;
        progressFill.style.width = `${((state.currentQuestionIndex + 1) / selectedQuestions.length) * 100}%`;
        
        // Update question type indicator
        updateQuestionType(question.type);
        
        // Create question HTML based on type
        questionContainer.innerHTML = '';
        questionContainer.className = 'question-container';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        questionContainer.appendChild(questionText);
        
        // Add visual elements for visual questions
        if (question.type === 'visual' && question.id === 16) {
            // Triangle counting question
            const visualContainer = document.createElement('div');
            visualContainer.className = 'visual-question';
            
            const triangleContainer = document.createElement('div');
            triangleContainer.className = 'triangle-container';
            
            // Create triangle shapes
            for (let i = 1; i <= 5; i++) {
                const triangle = document.createElement('div');
                triangle.className = `triangle triangle-${i}`;
                triangleContainer.appendChild(triangle);
            }
            
            visualContainer.appendChild(triangleContainer);
            questionContainer.appendChild(visualContainer);
        } else if (question.type === 'visual' && question.id === 17) {
            // Grid squares question
            const gridContainer = document.createElement('div');
            gridContainer.className = 'shape-grid';
            
            for (let i = 1; i <= 9; i++) {
                const square = document.createElement('div');
                square.className = 'shape-item';
                square.textContent = '□';
                gridContainer.appendChild(square);
            }
            
            questionContainer.appendChild(gridContainer);
        } else if (question.type === 'number' || question.type === 'alphabet') {
            // Show sequence for pattern questions
            const sequenceContainer = document.createElement('div');
            sequenceContainer.className = 'sequence-container';
            
            // Extract the sequence from the question text
            const seqMatch = question.question.match(/(\d+(?:,\s*\d+)*|[A-Z](?:,\s*[A-Z])*)/);
            if (seqMatch) {
                sequenceContainer.textContent = seqMatch[0] + ', ?';
            } else {
                sequenceContainer.textContent = question.question;
            }
            
            questionContainer.appendChild(sequenceContainer);
        }
        
        // Create options
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.index = index;
            
            optionBtn.addEventListener('click', function() {
                selectOption(this, index, question.correct);
            });
            
            optionsContainer.appendChild(optionBtn);
        });
        
        // Reset timer
        resetTimer();
    }
    
    // Update question type indicator
    function updateQuestionType(type) {
        let icon, text;
        
        switch(type) {
            case 'number':
                icon = 'fas fa-sort-numeric-up';
                text = 'Number Pattern';
                break;
            case 'visual':
                icon = 'fas fa-shapes';
                text = 'Visual Reasoning';
                break;
            case 'alphabet':
                icon = 'fas fa-sort-alpha-up';
                text = 'Alphabet Sequence';
                break;
            default:
                icon = 'fas fa-puzzle-piece';
                text = 'Logical Reasoning';
        }
        
        questionTypeElement.innerHTML = `<i class="${icon}"></i><span>${text}</span>`;
    }
    
    // Handle option selection
    function selectOption(button, selectedIndex, correctIndex) {
        // Disable all buttons
        const allButtons = optionsContainer.querySelectorAll('.option-btn');
        allButtons.forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('selected');
        });
        
        // Mark selected button
        button.classList.add('selected');
        
        // Check if answer is correct
        const isCorrect = selectedIndex === correctIndex;
        
        if (isCorrect) {
            button.classList.add('correct');
            state.score++;
        } else {
            button.classList.add('wrong');
            // Highlight correct answer
            allButtons[correctIndex].classList.add('correct');
        }
        
        // Store user's answer
        state.userAnswers.push({
            questionIndex: state.currentQuestionIndex,
            selected: selectedIndex,
            correct: isCorrect
        });
        
        // Stop timer
        clearInterval(state.timer);
        
        // Auto-advance to next question after 1 second
        setTimeout(() => {
            // Add slide-out animation
            questionContainer.classList.add('slide-out');
            
            setTimeout(() => {
                // Move to next question or finish test
                state.currentQuestionIndex++;
                
                if (state.currentQuestionIndex < selectedQuestions.length) {
                    loadQuestion();
                    startTimer();
                } else {
                    finishTest();
                }
            }, 500);
        }, 1000);
    }
    
    // Timer functions
    function startTimer() {
        state.timeLeft = 20;
        timerElement.textContent = state.timeLeft;
        timerElement.parentElement.classList.remove('warning', 'critical');
        
        state.timer = setInterval(() => {
            state.timeLeft--;
            timerElement.textContent = state.timeLeft;
            
            // Update timer color based on remaining time
            if (state.timeLeft <= 10) {
                timerElement.parentElement.classList.add('warning');
            }
            
            if (state.timeLeft <= 5) {
                timerElement.parentElement.classList.add('critical');
            }
            
            // Time's up
            if (state.timeLeft <= 0) {
                clearInterval(state.timer);
                autoSelectOption();
            }
        }, 1000);
    }
    
    function resetTimer() {
        clearInterval(state.timer);
        state.timeLeft = 20;
        timerElement.textContent = state.timeLeft;
        timerElement.parentElement.classList.remove('warning', 'critical');
    }
    
    function autoSelectOption() {
        // Automatically select the first option when time runs out
        const firstButton = optionsContainer.querySelector('.option-btn');
        if (firstButton) {
            const question = selectedQuestions[state.currentQuestionIndex];
            selectOption(firstButton, 0, question.correct);
        }
    }
    
    // Hint system
    function showHint() {
        if (state.hintUsed) return;
        
        const question = selectedQuestions[state.currentQuestionIndex];
        hintText.textContent = question.hint;
        
        // Mark hint as used
        state.hintUsed = true;
        hintBtn.disabled = true;
        hintBtn.innerHTML = '<i class="fas fa-lightbulb"></i><span>Hint Used</span>';
        
        // Show modal
        hintModal.classList.add('active');
    }
    
    function closeHint() {
        hintModal.classList.remove('active');
    }
    
    // Finish test and show results
    function finishTest() {
        // Calculate final score (IQ score from 70 to 130)
        const percentage = (state.score / selectedQuestions.length) * 100;
        const iqScore = Math.round(70 + (percentage / 100) * 60);
        
        // Calculate accuracy
        const accuracy = Math.round((state.score / selectedQuestions.length) * 100);
        
        // Determine IQ category
        let category, description;
        if (iqScore >= 130) {
            category = "Very Superior";
            description = "Top 2% of population";
        } else if (iqScore >= 120) {
            category = "Superior";
            description = "Top 14% of population";
        } else if (iqScore >= 110) {
            category = "High Average";
            description = "Above average intelligence";
        } else if (iqScore >= 90) {
            category = "Average";
            description = "Average intelligence";
        } else if (iqScore >= 80) {
            category = "Low Average";
            description = "Below average intelligence";
        } else {
            category = "Borderline";
            description = "Significantly below average";
        }
        
        // Update result screen
        finalScoreElement.textContent = iqScore;
        correctCountElement.textContent = state.score;
        accuracyElement.textContent = `${accuracy}%`;
        iqCategoryElement.textContent = category;
        categoryDescriptionElement.textContent = description;
        
        // Switch to result screen
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
    }
    
    // Navigation functions
    function goToStart() {
        if (confirm("Are you sure you want to quit? Your progress will be lost.")) {
            // Stop timer
            clearInterval(state.timer);
            
            // Switch screens
            quizScreen.classList.remove('active');
            startScreen.classList.add('active');
        }
    }
    
    function restartTest() {
        // Switch screens
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
    }
    
    function shareResults() {
        const iqScore = finalScoreElement.textContent;
        const category = iqCategoryElement.textContent;
        
        const shareText = `I scored ${iqScore} on the IQ Test Pro (${category} range)! Try it yourself:`;
        
        if (navigator.share) {
            navigator.share({
                title: 'My IQ Test Results',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText + ' ' + window.location.href)
                .then(() => {
                    alert('Results copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        }
    }
    
    // Initialize the app
    init();
});