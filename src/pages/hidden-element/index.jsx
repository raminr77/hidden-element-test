import { titleGenerator } from 'utils/title-generator';
import { SubmitOrderButton } from 'components/submit-order-button';

function HiddenElementPage() {
  titleGenerator('Hidden Element');
  return (
    <div>
      <SubmitOrderButton />
    </div>
  );
}

export { HiddenElementPage };
