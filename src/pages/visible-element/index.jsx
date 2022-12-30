import { titleGenerator } from 'utils/title-generator';
import { VisiblePizzaType } from 'components/pizza-type';
import { VisiblePizzaSize } from 'components/pizza-size';
import { VisibleHeader } from 'components/visible-header';
import { SubmitOrderButton } from 'components/submit-order-button';

function VisibleElementPage() {
  titleGenerator('Visible Element');

  return (
    <div>
      <VisibleHeader />
      <div className="w-full p-5 mx-auto max-w-5xl">
        <VisiblePizzaSize />
        <VisiblePizzaType />
        <SubmitOrderButton />
      </div>
    </div>
  );
}

export { VisibleElementPage };
