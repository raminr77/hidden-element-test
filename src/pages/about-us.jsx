import { BackButton } from 'components/back-button';
import { titleGenerator } from 'utils/title-generator';

function AboutUsPage() {
  titleGenerator('About Us');

  return (
    <div className="w-full px-5">
      <div className="animate__animated animate__fadeIn flex shadow-lg flex-col bg-slate-100 dark:bg-slate-700 p-5 rounded-lg max-w-lg mx-auto mt-10">
        <h3 className="mb-2 text-2xl font-bold text-rose-500">About Us</h3>
        <p className="text-sm leading-7 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum rem aut
          exercitationem possimus omnis labore minima iure. Eius laudantium odio amet
          laboriosam deleniti non aliquam repellendus tenetur recusandae consectetur. Ut?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia accusantium
          facere fugiat rem nemo molestias totam laudantium error possimus alias
          exercitationem, adipisci natus molestiae maiores. Doloremque aliquam corporis
          excepturi accusantium.
        </p>

        <BackButton />
      </div>
    </div>
  );
}
export { AboutUsPage };
