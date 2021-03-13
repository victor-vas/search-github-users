/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { GithubContext, IGithubContext } from '../../context/context';
import { IRepo } from '../../context/mockData/mockRepos';
import { Pie3D, Doughnut2D, Column3D, Bar3D } from '../Charts';
import Wrapper from './styled';

export interface IChartData {
  label: string;
  value: string;
  stars: number;
}

const Repos = () => {
  const { repos } = useContext(GithubContext) as IGithubContext;

  const languages = repos.reduce((total: any, item: IRepo) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed: any = Object.values(languages)
    .sort((a: any, b: any) => b.value - a.value)
    .slice(0, 5);

  const mostPopular: any = Object.values(languages)
    .sort((a: any, b: any) => b.value - a.value)
    .map((item: any) => ({ ...item, value: item.stars }))
    .slice(0, 5);

  let { stars, forks } = repos.reduce(
    (total: any, item: IRepo) => {
      // eslint-disable-next-line no-shadow
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { stars: {}, forks: {} },
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

export default Repos;
