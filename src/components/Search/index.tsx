/* eslint-disable prettier/prettier */
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { GithubContext, IGithubContext } from '../../context/context';
import { Wrapper, ErrorWrapper } from './styled';

const Search = () => {
  const [user, setUser] = useState('');
  const { requests, error, searchGithubUser, isLoading } = useContext(
    GithubContext
  ) as IGithubContext;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      searchGithubUser(user);
    }
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUser(e.target.value);
              }}
            />
            {requests > 0 && !isLoading && (
              <button type="submit">search</button>
            )}
          </div>
        </form>
        <h3>{`requests: ${requests} / 60`}</h3>
      </Wrapper>
    </section>
  );
};

export default Search;
