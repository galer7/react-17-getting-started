import React, { Component } from "react";
import { UserData } from "./Card";

export default class Form extends Component<{
  onSubmit: (data: UserData) => void;
}> {
  userNameRef = React.createRef<HTMLInputElement>();
  handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!this.userNameRef.current) return;
    const input = this.userNameRef.current.value;
    const resp = await fetch(`https://api.github.com/users/${input}`);
    const userData = await resp.json();
    console.log(userData);
    this.props.onSubmit(userData);

    this.userNameRef.current.value = "";
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
