import { StaticPageLayout } from 'layouts/static-page';
import { titleGenerator } from 'utils/title-generator';

function AboutUsPage() {
  titleGenerator('About Us');
  return (
    <StaticPageLayout title="About Us">
      <div className="w-full text-left leading-7">
        <ul>
          <li>
            <a href="https://github.com/raminr77">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/raminr77/">Linkedin</a>
          </li>
          <li>
            <a href="https://raminrezaei.ir">RaminRezaei.ir</a>
          </li>
          <li>
            <a href="mailto:info@raminrezaei.ir">Info@RaminRezaei.ir</a>
          </li>
          <li>Author: Ramin Rezaei</li>
        </ul>
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae
        blanditiis quo tempore sunt, reiciendis ullam? Repudiandae dolore, voluptates
        laboriosam corporis perspiciatis aliquid ad optio, molestiae enim corrupti
        obcaecati architecto!
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae
        blanditiis quo tempore sunt, reiciendis ullam? Repudiandae dolore, voluptates
        laboriosam corporis perspiciatis aliquid ad optio, molestiae enim corrupti
        obcaecati architecto!
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae
        blanditiis quo tempore sunt, reiciendis ullam? Repudiandae dolore, voluptates
        laboriosam corporis perspiciatis aliquid ad optio, molestiae enim corrupti
        obcaecati architecto!
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae
        blanditiis quo tempore sunt, reiciendis ullam? Repudiandae dolore, voluptates
        laboriosam corporis perspiciatis aliquid ad optio, molestiae enim corrupti
        obcaecati architecto!
      </div>
    </StaticPageLayout>
  );
}

export { AboutUsPage };
