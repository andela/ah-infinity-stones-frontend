export const logout = () => {
  localStorage.clear();
};

export const parseJwt = token => JSON.parse(atob(token.split('.')[1]));

export const isAuthenticated = () => {
  localStorage.setItem('TOKEN', '..');
};

export const token = localStorage.getItem('Token');
let decodedToken;
if (token === null) {
  decodedToken = { username: 'leon' };
} else {
  decodedToken = parseJwt(token);
}

export const { username } = decodedToken;
export const slug = localStorage.getItem('slug');

export function Surfer() {
  if (localStorage.getItem('Token') === null) {
    return 'Leave a comment..';
  }

  return `Comment as ${username}..`;
}


export function niceTime(t = '2019-01-31T18:24:43.727276+03:00') {
  return new Date(t).toUTCString();
}
