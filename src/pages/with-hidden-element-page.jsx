import { Accordion } from 'components/accordion';
import { titleGenerator } from 'utils/title-generator';
import { FinishButton } from 'components/finish-button';

function WithHiddenElementPage() {
  titleGenerator();

  return (
    <div className="w-full flex flex-col items-center p-5">
      <Accordion title="TITLE">TEST</Accordion>
      <Accordion title="TITLE">TEST</Accordion>
      <Accordion title="TITLE">TEST</Accordion>

      <FinishButton />
    </div>
  );
}

export { WithHiddenElementPage };
