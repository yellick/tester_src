function setPageTitle(lessonName) {
    // определяю тег title
    // устанавливаю в него содержимое с названием сайта и темой урока
    document.querySelector('title').textContent = siteName + ' | ' + lessonName
}

function setTestContent(lessonIndex) {
    // определяю заголовки и задаю им контент
    document.getElementById('title').textContent = tests[lessonIndex]['name'];
    document.getElementById('lesson-name').textContent = tests[lessonIndex]['lessonName'];
    document.getElementById('lesson-class').textContent = tests[lessonIndex]['class'] + ' класс';

    // заполняю контент теста
    let test = document.getElementById('test');

    // перебираю и добавляю вопросы в тест
    tests[lessonIndex]['questions'].forEach((i, el) => {
        // содаю элементы
        let question = document.createElement('div');
        let questionText = document.createElement('div');
        let questionNumber = document.createElement('div');
        let questionTextContent = document.createElement('p');
        let questionNumberContent = document.createElement('p');

        // заполняю вопросы теста
        let answerOptions = document.createElement('form');
        // индекс вопроса для генерации id
        let questionIndex = el;
        i['answers'].forEach((i, el) => {
            // содаю элементы вопроса
            let answerOption = document.createElement('div');
            let answerInput = document.createElement('input');
            let answerInputLabel = document.createElement('label');
            
            // создаю общее значение атрибутов id и for
            let id = 'answer-' + (questionIndex) + '-' + (el)

            // добавляю классы
            answerOption.classList.add('answer-option');
            
            // устанавливаю атрибуты
            answerInput.setAttribute('type', 'radio');
            answerInput.setAttribute('class', 'answer');
            answerInput.setAttribute('name', 'answer');
            answerInput.setAttribute('id', id);
            answerInput.setAttribute('value', i)
            
            answerInputLabel.setAttribute('for', id)
            
            // добавляю контент
            answerInputLabel.textContent = i;
            
            // добавляю элементы на страницу
            answerOptions.appendChild(answerOption);
            answerOption.appendChild(answerInput);
            answerOption.appendChild(answerInputLabel);
        });

        // добавляю классы
        question.classList.add('question');
        questionText.classList.add('question-text');
        questionNumber.classList.add('question-number');
        answerOptions.classList.add('answer-options');
        
        // добавляю контент
        questionText.textContent = i['question'];
        questionNumberContent.textContent = el + 1;

        // добавляю элементы на страницу
        test.appendChild(question);
        test.appendChild(answerOptions);
        question.appendChild(questionText);
        questionText.appendChild(questionNumber);
        questionNumber.appendChild(questionNumberContent);
        questionText.appendChild(questionTextContent);
    });
    
    // создаю кнопку отправки
    let submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('id', 'submit-btn');
    submitBtn.textContent = 'Закончить';
    test.appendChild(submitBtn);
    
    // функция по нажатию кнопки отправки
    $('#submit-btn').on('click', function(e){
        e.preventDefault()
        checkingTest(tests[lessonIndex]['answers'])
    });
};

function checkingTest(rightAnswers){
    let rightAnswersCount = 0;
    let userAnswers = [];
    
    // перебираю все выделенные инпуты
    for (let i = 0; i < $(".answer-options input:checked").length; i++) {
        // получаю значение id, разбиваю его на до и после
        let dataFromId = $(".answer-options input:checked")[i].getAttribute('id').slice(7).split('-');
        // dataFromId[0] - номер вопроса, dataFromId[1] - номер ответа
        // добавляю ответы в массив по их индексу
        userAnswers[dataFromId[0]] = dataFromId[1]
    };
    
    // сравниваю ответы
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] == rightAnswers[i]){
            rightAnswersCount++;
        }
    };
    
    return rightAnswersCount
};


// получаю хеш страницы, отбрасываю первый символ строки (#), конвертирую строку в число и вызываю с ним функцию.
// document.location - ссылка на эту страницу
// .hash - получаю хеш из ссылки
// .substr(х) - удаляю х символов сначала строки
let lessonIndex = Number(document.location.hash.substr(1));

setPageTitle(tests[lessonIndex]['name']);
setTestContent(lessonIndex);