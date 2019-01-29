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
export const firstname = localStorage.getItem('firstname');
export const lastname = localStorage.getItem('lastname');
export const birthday = localStorage.getItem('birthday');
export const followers = localStorage.getItem('followers');
export const bio = localStorage.getItem('bio');
export const image = localStorage.getItem('image');
