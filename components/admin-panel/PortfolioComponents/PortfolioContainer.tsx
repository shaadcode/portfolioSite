import LastPortfolios from './LastPortfolios';
import PortfolioCMS from './PortfolioCMS';

const PortfolioContainer = ({ display }: { display: string }) => {
  return (
    <div className={`${display} ic-jc flex-col gap-10`}>
      <PortfolioCMS />
      <LastPortfolios />
    </div>
  );
};

export default PortfolioContainer;
