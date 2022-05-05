const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: '/assets/image/cads/first-card.png',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    },

    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: '/assets/image/cads/second-card.png',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: '/assets/image/cads/third-card.png',
        tags: ['Culture', 'Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    },
    {
        id: 4,
        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image onthe Back',
        urlToImage: '/assets/image/cads/third-card.png',
        tags: ['Culture', 'Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    },

    {
        id: 5,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: '/assets/image/cads/fifth-card.png',
        tags: ['Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    },
    {
        id: 6,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: '/assets/image/cads/first-card.png',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    },

    {
        id: 7,
        title: 'Motivation Is The First Step To Success',
        urlToImage: '/assets/image/cads/second-card.png',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    },
    {
        id: 8,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: '/assets/image/cads/third-card.png',
        tags: ['Culture', 'Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '05.05.2022'
    }
]


window.onload = function () {
    console.log('Hello');

    //Strategies Tags

    addTagsClickHandler();

}
const addTagsClickHandler = () => {
    document.querySelector('.marketing-strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerText)
            }
        }
    })
}
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.marketing-strategies__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('button_colored');
        tag.classList.add('button_bordered');
    })
}
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('button_colored');
    clickedTag.classList.remove('button_bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
            console.log(tag.innerText)
        })

    })
}