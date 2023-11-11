import { Component } from 'react';
import { Form, Button, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };

  resetForm() {
    this.setState({ search: '' });
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;
    return (
      <header className="searchbar">
        <Form onSubmit={handleSubmit} className="form">
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>

          <Input
            name="search"
            value={search}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </Form>
      </header>
    );
  }
}

export default Searchbar;
