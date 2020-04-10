import addons from '@storybook/addons'
import  {STORY_RENDERED } from '@storybook/core-events'

addons.register('TitleAddon', api => {
  const myTitle='Epics Components'
  let interval=null
  const setTitle=()=>{
    clearTimeout(interval)
    let storyData=null
    try{
      storyData=api.getCurrentStoryData()
    }catch(e){
    }
    let title
    if(!storyData){
      title=myTitle
    }else{
      title=`${storyData.kind} - ${storyData.name} ⋅ ${myTitle}`
    }
    if(document.title!==title){
      document.title=title
    }
    interval=setTimeout(setTitle, 100)
  }
  setTitle()
  api.on(STORY_RENDERED,()=>setTitle())
})
