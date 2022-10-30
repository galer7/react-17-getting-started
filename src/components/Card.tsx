import React, { Component } from "react";

export default class Card extends Component<UserData> {
  render() {
    const profile = this.props;
    return (
      <div>
        <img src={profile.avatar_url} alt="Avatar" />
        <div>
          <div>{profile.name}</div>
          <div>{profile.company}</div>
        </div>
      </div>
    );
  }
}

export interface UserData {
  avatar_url: string;
  name: string;
  company: string;
}
