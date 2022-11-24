import { useEffect } from 'react';
import JSConfetti from 'js-confetti';
import { Link } from 'react-router-dom';
import { HOME_URL } from 'constants/app-routes';
import { StaticPageLayout } from 'layouts/static-page';
import { titleGenerator } from 'utils/title-generator';

const jsConfetti = new JSConfetti();

function ThankYouPage() {
  titleGenerator('Thank You');

  useEffect(() => {
    jsConfetti.addConfetti({
      confettiRadius: 2,
      confettiNumber: 1500
    });
  }, []);

  return (
    <StaticPageLayout hasWave>
      <div className="flex flex-col items-center">
        <h1 className="pw-title-font text-primaryHover text-4xl">Thank You</h1>
        <Link className="animate__fadeIn animate__animated delay-1000 mt-6" to={HOME_URL}>
          [ HOME ]
        </Link>
      </div>
    </StaticPageLayout>
  );
}

export { ThankYouPage };
