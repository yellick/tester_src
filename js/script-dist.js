// открытие и закрытие модального окна
function openSettingsWindow() {
    $('.settings-window').css('opacity', '1');
    $('.settings-window').addClass('settings-window-active');
};

function closeSettingsWindow() {
    $('.settings-window').css('opacity', '0');
    setTimeout(() => {
        $('.settings-window').removeClass('settings-window-active');
    }, 300);
};

// открытие/закрытие окна с настройками поиска
$('#open-sett-menu-btn').on('click', openSettingsWindow);
$('#close-settins-btn').on('click', closeSettingsWindow);

//
$('#sortTestList-btn').on('click', function () {
    let testList = document.getElementById('tests-list');
    // удаляю все тесты из списка
    testList.innerHTML = '';
    generatingTestsList();
    closeSettingsWindow();
});

// устанавливаю Название странице
function setPageTitle() {
    document.querySelector('title').textContent = siteName;
};

// генерация списка тестов
function generatingTestsList() {
    let list = document.getElementById('tests-list');

    let searchClass = request[0];
    let searchLesson = request[1];

    tests.forEach((item, i) => {

        // проверяю тест на соответствие запросу
        if ((item['class'] == searchClass || searchClass == 'all') && (item['lesson'] == searchLesson || searchLesson == 'all')) {
            
            // создаю элемент
            let listElement = document.createElement('a');
            let lessonName = document.createElement('p');
            let aboutLesson = document.createElement('div');
            let lesson = document.createElement('span');
            let dash = document.createElement('span');
            let lessonClass = document.createElement('span');

            // задаю для каждого из созданных элементов класс
            listElement.classList.add('list-elem');
            lessonName.classList.add('lesson-name');
            aboutLesson.classList.add('about-lesson');

            listElement.setAttribute('href', 'lesson/index.html#' + i)

            // присваиваю контент
            lessonName.textContent = item['name'];
            lesson.textContent = item['lessonName'];
            dash.textContent = ' - ';
            lessonClass.textContent = item['class'] + ' класс';

            // добавляю элементы на страницу
            list.appendChild(listElement);
            listElement.appendChild(lessonName);
            listElement.appendChild(aboutLesson);
            aboutLesson.appendChild(lesson);
            aboutLesson.appendChild(dash);
            aboutLesson.appendChild(lessonClass);
        }
    })
};

// генерирую список предмтов 
function generatingLessonsList() {
    let lessonsList = document.getElementById('lessons-list');

    lessons.forEach((i, el) => {
        // i - элемент массива
        let opt = document.createElement('option');
        opt.textContent = i['lessonName'];
        opt.setAttribute('value', i['lesson']);
        lessonsList.appendChild(opt);
    });
};

// получение значиние с селекта и кнопок
function getValuesFromSearchSettings() {
    let selectedLesson;
    let selectedClass;

    // получаю значение с выбора класса
    $('.class-list-el').click(function () {
        $('.class-list-el').removeClass('class-list-el-active');
        $(this).addClass('class-list-el-active');
        selectedClass = this.value;
        request[0] = selectedClass;
    });

    // получаю значение с выбора урока
    $('#lessons-list').change(function () {
        selectedLesson = this.value;
        request[1] = selectedLesson;
    });
};


// переменная с запросом для сортировки списка тестов
// request[0] - класс; request[1] - урок
let request = ['all', 'all'];

setPageTitle()
generatingTestsList(request);
generatingLessonsList();
getValuesFromSearchSettings()
