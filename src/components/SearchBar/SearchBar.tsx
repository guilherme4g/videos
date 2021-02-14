import React from 'react';

interface IPropsSearchBar {
  onFormSubmit: (term: string) => void;
}

interface IStateSearchBar {
  term: string;
}

class SearchBar extends React.Component<IPropsSearchBar, IStateSearchBar> {
  state = { term: '' };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { onFormSubmit } = this.props;
    const { term } = this.state;
    onFormSubmit(term);
  };

  render(): React.ReactNode {
    const { term } = this.state;

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="input-search">
              Que video você procura ?
              <input
                type="text"
                id="input-search"
                onChange={this.onInputChange}
                value={term}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
