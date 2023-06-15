import 'server-only';

import Max from '../public/svgs/active/max-avatar.svg';
import Ruby from '../public/svgs/active/ruby-avatar.svg';
import Teacher from '../public/svgs/active/teacher-avatar.svg';
import Jaython from '../public/svgs/active/jaython-avatar.svg';

const ActiveStudents = () => (
    <div>
      <div>
        <Teacher  />
        <Ruby  />
        <Jaython  />
        <Max  />
      </div>
      <p>test</p>
    </div>
  );

export default ActiveStudents;
