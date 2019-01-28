import React from "react";
import Button from "../components/Profile/containers/Button";
import ProfileItem from "../components/Profile/containers/ProfileItem";
import LoadingProfile from "../components/Profile/containers/LoadingProfile";
import {
  firstname,
  lastname,
  birthday,
  bio,
  followers,
  image
} from "../services/profile.service";
import ProfileForm from "../components/Profile/containers/ProfileForm";
import "../components/Profile/Profile.scss";

let App = () => (
  <section>
    <Button />
    <LoadingProfile />
    <ProfileItem />
    <hr />
    <ProfileForm
      firstname={firstname}
      lastname={lastname}
      birthday={birthday}
      bio={bio}
      followers={followers}
      image={image}
    />
  </section>
);

export default App;
