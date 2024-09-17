import Part from './Part'

const Content = (content) => {
    return(
      <div>
        <Part number={content.part} content={content.exercise}/>
      </div>
    )
  }

export default Content