'use client';

const IntroButtons = ({ ctaLabel }) => (
  <div> 
    <button onClick={() => {console.log('click')}}>
      <p dangerouslySetInnerHTML={{ __html: ctaLabel }}/>
    </button>
    <button onClick={() => {console.log('click')}}>
      <p>Demo</p>
    </button>
  </div>
);

export default IntroButtons;
