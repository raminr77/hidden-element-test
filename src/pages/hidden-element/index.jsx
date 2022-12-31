import { BurgerMenu } from 'components/burger-menu';
import { titleGenerator } from 'utils/title-generator';
import { SubmitOrderButton } from 'components/submit-order-button';
import { VisiblePizzaSize } from 'components/pizza-size';
import { VisiblePizzaType } from 'components/pizza-type';

function HiddenElementPage() {
  titleGenerator('Hidden Element');
  return (
    <div className="w-full h-screen relative p-5 overflow-hidden">
      <BurgerMenu />
      <div className="w-full p-5 mx-auto max-w-5xl mt-10">
        <VisiblePizzaSize isVisible={false} />
        <VisiblePizzaType isVisible={false} />
        <SubmitOrderButton />
      </div>
    </div>
  );
}

export { HiddenElementPage };
