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
        let answerOptions = document.createElement('div');
        // индекс вопроса для генерации id
        let questionIndex = el;
        i['answers'].forEach((i, el) => {
            // содаю элементы вопроса
            let answerOption = document.createElement('div');
            let answerInput = document.createElement('input');
            let answerInputLabel = document.createElement('label');
            
            // создаю общее значение атрибутов id и for
            let id = 'answer-' + (questionIndex + 1) + '-' + (el + 1)

            // добавляю классы
            answerOption.classList.add('answer-option');
            
            // устанавливаю атрибуты
            answerInput.setAttribute('type', 'radio');
            answerInput.setAttribute('name', 'answer-' + (questionIndex + 1));
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
    $('#submit-btn').on('click', function(){
        
    })
};

// получаю хеш страницы, отбрасываю первый символ строки (#), конвертирую строку в число и вызываю с ним функцию.
// document.location - ссылка на эту страницу
// .hash - получаю хеш из ссылки
// .substr(х) - удаляю х символов сначала строки
let lessonIndex = Number(document.location.hash.substr(1));

setPageTitle(tests[lessonIndex]['name']);
setTestContent(lessonIndex);