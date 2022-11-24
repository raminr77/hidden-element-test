import { Accordion } from 'components/accordion';
import { titleGenerator } from 'utils/title-generator';

function WithHiddenElementPage() {
  titleGenerator();
  return (
    <div>
      <Accordion title="title">div</Accordion>
      <Accordion title="title">div</Accordion>
      <Accordion title="title">div</Accordion>
    </div>
  );
}

export { WithHiddenElementPage };
