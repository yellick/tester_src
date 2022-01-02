let siteName = 'Tester';

// lessons list
let lessons = [
    {
        lesson: 'math',
        lessonName: 'Математика',
        elementaryСlass: '1',
        finalClass: '11',
    },
    {
        lesson: 'lang_ru',
        lessonName: 'Русский язык',
        elementaryСlass: '1',
        finalClass: '11',
    },
];

// all tests
let tests = [
    {
        lesson: lessons[0]['lesson'],
        lessonName: lessons[0]['lessonName'],
        name: 'Сложение и вычитание',
        class: '1',
        questions: [
            {
                question: 'Сколько будет 2+2?',
                answers: ['2', '3', '4', '5'],
            },
            {
                question: 'Сколько будет 2+4?',
                answers: ['5', '6', '7', '8'],
            },
            {
                question: 'Сколько будет 3-1?',
                answers: ['2', '3', '4', '5'],
            },
            {
                question: 'Сколько будет 5+2?',
                answers: ['1', '3', '5', '7'],
            },
            {
                question: 'Сколько будет 5-5?',
                answers: ['0', '1', '2', '3'],
            },
        ],
        answers: ['2', '1', '0', '3', '0'],
    },
];

/*
    0 - math
    
    {
        lesson: lessons[  number of lesson  ]['lesson'],
        lessonName: lessons[  number of lesson  ]['lessonName'],
        name: '',
        class: '',
        questions: [
            {
                question: '',
                answers: [],
            },
        ],
        answers: [],
    },
*/