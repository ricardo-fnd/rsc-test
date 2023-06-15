import 'server-only';

import IntroButtons from './IntroButtons';
import ActiveStudents from '../../../shared/ActivitiesNumber';
import Header from '../../../public/svgs/headers/header-landing.svg';

const Intro = () => (
  <section>
    <div>
      <article>
        <header>
          <h1>test</h1>
        </header>
        <p>test</p>
        <IntroButtons ctaLabel='test' />
        <ActiveStudents />
      </article>
      <figure>
        <Header />
      </figure>
    </div>
  </section>
);

export default Intro;
