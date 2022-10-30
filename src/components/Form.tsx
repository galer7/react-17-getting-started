import React, { Component } from "react";

export default class Form extends Component<{
  onSubmit: React.Dispatch<React.SetStateAction<never[]>>;
}> {
  userNameRef = React.createRef();
  handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input = this.userNameRef.current.value;
    const resp = await fetch(`https://api.github.com/users/${input}`);
    this.props.onSubmit(await resp.json());
  };

  render() {
    return (
      <form action="">
        <input
          ref={this.userNameRef}
          type="text"
          placeholder="GitHub username"
        />
        <button onClick={this.handleSubmit}>Add card</button>
      </form>
    );
  }
}
