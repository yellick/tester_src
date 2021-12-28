$('#open-sett-menu-btn').on('click', function() {
    $('.settings-window').css('opacity', '1');
    $('.settings-window').addClass('settings-window-active');
});
$('#close-settins-btn').on('click', function() {
    $('.settings-window').css('opacity', '0');
    setTimeout(() => {
        $('.settings-window').removeClass('settings-window-active');
    }, 300);
});

$('.class-list-el').click(function(){
    $('.class-list-el').removeClass('class-list-el-active');
    $(this).addClass('class-list-el-active');
    // variable = this.value      получение номера кнопки
});

function makingTestsList() {
    let list = document.getElementById('tests-list');
    
    tests.forEach((item, i) => {
        
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
        lessonClass.textContent = item['class'] + 'класс';
        
        // добавляю элементы на страницу
        list.appendChild(listElement);
        listElement.appendChild(lessonName);
        listElement.appendChild(aboutLesson);
        aboutLesson.appendChild(lesson);
        aboutLesson.appendChild(dash);
        aboutLesson.appendChild(lessonClass);
    })
};

makingTestsList()