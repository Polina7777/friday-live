window.onload = function() {
  console.log('Hellofbgf');

    //Strategies Tags
  
 addTagsClickHandler();

}
const addTagsClickHandler = () => {
    document.querySelector('.marketing-strategies__tags').addEventListener('click',(e) => {
    if (e.target.classList.contains('tag')){
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
          if(tag.innerText === selectedTag) {
              strategy.classList.remove('strategy_hidden');
          }
      console.log(tag.innerText)
     })

    })
}