interface IUser {
  username: string;
  isPremium: boolean;
}



const Welcome = ({ username, isPremium }: IUser) => {
  return (
    <div>
      Welcome {username}, you are {isPremium ? "a premium" : "a regular"} user
    </div>
  );
};

export default Welcome;