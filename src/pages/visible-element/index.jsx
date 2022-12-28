import { VisibleHeader } from 'components/visible-header';
import { titleGenerator } from 'utils/title-generator';

function VisibleElementPage() {
  titleGenerator('Visible Element');
  return (
    <div>
      <VisibleHeader />
      Pizza Wizzard - Visible Element
    </div>
  );
}

export { VisibleElementPage };
